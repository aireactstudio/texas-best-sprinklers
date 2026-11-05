import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/config/site";
import {
  normalize,
  validate,
  validateResumeFile,
  resumeContentType,
  RESUME_MAX_BYTES,
} from "@/lib/apply";

export const runtime = "nodejs";

// Same recipient and from-address as src/app/api/contact/route.ts EMAIL_CONFIG.
const EMAIL_CONFIG = {
  from: "admin@reactivlabs.com",
  primaryRecipient: "sprinkleranddrains@gmail.com",
};

const MIN_FILL_MS = 3000;
const MAX_JSON_BYTES = 20_000;
const MAX_MULTIPART_BYTES = RESUME_MAX_BYTES + 100_000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:700;width:180px;">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;white-space:pre-wrap;">${escapeHtml(value) || "—"}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const declared = Number(request.headers.get("content-length") || 0);
    let body: Record<string, unknown> = {};
    let resume: { filename: string; content: Buffer; contentType: string } | null = null;

    if (contentType.includes("multipart/form-data")) {
      if (declared > MAX_MULTIPART_BYTES) {
        return NextResponse.json(
          {
            error: "Your resume file is too large.",
            fileError: "Resume must be 4 MB or smaller. Try a PDF, or paste a link instead.",
          },
          { status: 413 }
        );
      }
      let form: FormData;
      try {
        form = await request.formData();
      } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
      }
      Array.from(form.entries()).forEach(([k, v]) => {
        if (typeof v === "string") body[k] = v;
      });
      const file = form.get("resumeFile");
      if (file && typeof file !== "string" && file.size > 0) {
        const fileError = validateResumeFile(file);
        if (fileError) {
          return NextResponse.json(
            { error: "Please fix your resume file.", fileError },
            { status: 400 }
          );
        }
        const safeName = file.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120) || "resume";
        resume = {
          filename: safeName,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: resumeContentType(safeName),
        };
      }
    } else {
      const raw = await request.text();
      if (raw.length > MAX_JSON_BYTES) {
        return NextResponse.json({ error: "Request too large." }, { status: 413 });
      }
      try {
        body = JSON.parse(raw) as Record<string, unknown>;
      } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
      }
    }

    // Spam guards: honeypot field must be empty; form must not be submitted instantly.
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";
    const startedAt = Number(body.startedAt);
    const tooFast = !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS;
    if (honeypot || tooFast) {
      return NextResponse.json({ ok: true });
    }

    const values = normalize(body);
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Please fix the highlighted fields.", fieldErrors: errors },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("apply: missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "We couldn't submit your application right now." },
        { status: 502 }
      );
    }

    const company = SITE_CONFIG.fullName;
    let emailed = false;
    let resumeAttached = false;

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const text = [
        `New employment application — ${company}`,
        "",
        `Name: ${values.fullName}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `Position: ${values.position}`,
        `City/State: ${values.cityState}`,
        `Years of experience: ${values.yearsExperience}`,
        `Expected pay: ${values.expectedSalary}`,
        `Availability / start date: ${values.availability}`,
        `Licenses / certifications: ${values.licenses}`,
        `Resume link: ${values.resumeUrl}`,
        `Resume file: ${resume ? `${resume.filename} (attached)` : "none"}`,
        "",
        "Why you:",
        values.whyYou || "—",
      ].join("\n");
      const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#111;">
        <div style="background:#0c4b33;color:#fff;padding:24px;">
          <h1 style="margin:0;font-size:22px;">New Employment Application</h1>
          <p style="margin:8px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(company)}</p>
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #eee;">
          ${row("Name", values.fullName)}
          ${row("Phone", values.phone)}
          ${row("Email", values.email)}
          ${row("Position", values.position)}
          ${row("City / State", values.cityState)}
          ${row("Years of experience", values.yearsExperience)}
          ${row("Expected pay", values.expectedSalary)}
          ${row("Availability / start", values.availability)}
          ${row("Licenses / certs", values.licenses)}
          ${row("Resume link", values.resumeUrl)}
          ${row("Resume file", resume ? `${resume.filename} (attached)` : "")}
        </table>
        <div style="padding:20px;border:1px solid #eee;border-top:0;">
          <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">Why you</h2>
          <p style="white-space:pre-wrap;line-height:1.6;margin:0;">${escapeHtml(values.whyYou) || "—"}</p>
        </div>
        <p style="color:#666;font-size:12px;margin-top:16px;">
          This application was submitted from the Careers page on sprinkleranddrains.com.
        </p>
      </div>
    `;
      const base = {
        from: EMAIL_CONFIG.from,
        to: [EMAIL_CONFIG.primaryRecipient],
        replyTo: values.email,
        subject: `Employment Application — ${values.position} — ${values.fullName}`,
      };
      const { error } = await resend.emails.send({
        ...base,
        text,
        html,
        ...(resume
          ? {
              attachments: [
                {
                  filename: resume.filename,
                  content: resume.content.toString("base64"),
                  contentType: resume.contentType,
                },
              ],
            }
          : {}),
      });
      if (!error) {
        emailed = true;
        if (resume) resumeAttached = true;
      } else if (resume) {
        console.error("apply: Resend send with attachment failed; retrying without");
        const note =
          "\n\nNOTE: The applicant uploaded a resume but it could not be attached. Ask them to email it.";
        const retry = await resend.emails.send({
          ...base,
          text: text + note,
          html: html + `<p style="color:#b00;font-family:Arial,sans-serif;">${note.trim()}</p>`,
        });
        if (retry.error) console.error("apply: Resend send failed");
        else emailed = true;
      } else {
        console.error("apply: Resend send failed");
      }
    } catch {
      console.error("apply: Resend request error");
    }

    if (emailed) {
      const resumeNotice =
        resume && !resumeAttached
          ? `Your application was received, but we couldn't attach your resume. Please email it to sprinkleranddrains@gmail.com.`
          : undefined;
      return NextResponse.json({ ok: true, ...(resumeNotice ? { resumeNotice } : {}) });
    }

    return NextResponse.json(
      { error: "We couldn't submit your application right now." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { error: "We couldn't submit your application right now." },
      { status: 500 }
    );
  }
}

"use client";

import { useRef, useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import {
  LIMITS,
  normalize,
  validate,
  positionSuggestions,
  RESUME_ACCEPT,
  validateResumeFile,
  type FieldErrors,
} from "@/lib/apply";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "success" | "error";

export default function CareersApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fileError, setFileError] = useState("");
  const [notice, setNotice] = useState("");
  const startedAt = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    const raw = Object.fromEntries(data.entries());
    const values = normalize(raw);
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    const file = data.get("resumeFile");
    const hasFile = file instanceof File && file.size > 0;
    const fErr = hasFile ? validateResumeFile(file) : null;
    setFileError(fErr || "");
    if (fErr && Object.keys(fieldErrors).length === 0) {
      setStatus("idle");
      e.currentTarget.querySelector<HTMLElement>('[name="resumeFile"]')?.focus();
      return;
    }
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("idle");
      const first = Object.keys(fieldErrors)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const payload = new FormData();
      for (const [k, v] of Object.entries(values)) payload.append(k, v);
      payload.append("website", typeof raw.website === "string" ? raw.website : "");
      payload.append("startedAt", String(startedAt.current));
      if (hasFile) payload.append("resumeFile", file, file.name);
      const res = await fetch("/api/apply", { method: "POST", body: payload });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors);
        if (json.fileError) setFileError(json.fileError);
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setNotice(json.resumeNotice || "");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrorMsg("Unable to send. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 text-center"
      >
        <CheckCircle2 className="mx-auto text-irrigation-darkGreen" size={44} />
        <h2 className="mt-5 text-2xl md:text-3xl font-bold text-irrigation-blue">
          Application received
        </h2>
        <p className="mt-4 text-gray-700 max-w-md mx-auto leading-relaxed">
          Thanks for your interest in Texas Best Sprinklers. We&apos;ll review your
          application and follow up using the phone number or email you gave us.
        </p>
        {notice && (
          <p className="mt-4 text-sm text-irrigation-blue max-w-md mx-auto">{notice}</p>
        )}
        <p className="mt-4 text-sm text-gray-600">
          Questions? Call{" "}
          <a className="text-irrigation-blue underline" href="tel:+18173047896">
            (817) 304-7896
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 grid gap-5"
    >
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="fullName" required autoComplete="name" maxLength={LIMITS.fullName} error={errors.fullName} />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" maxLength={LIMITS.phone} error={errors.phone} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required autoComplete="email" maxLength={LIMITS.email} error={errors.email} />
        <Field label="City, State" name="cityState" required placeholder="Fort Worth, TX" autoComplete="address-level2" maxLength={LIMITS.cityState} error={errors.cityState} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Position Applied For" name="position" required list="positions" maxLength={LIMITS.position} error={errors.position} />
        <datalist id="positions">
          {positionSuggestions.map((p) => (
            <option key={p} value={p} />
          ))}
        </datalist>
        <Field label="Years of Experience" name="yearsExperience" type="number" inputMode="decimal" min={0} max={60} step="0.5" error={errors.yearsExperience} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Expected Pay (optional)"
          name="expectedSalary"
          placeholder="Pay is discussed during the interview"
          maxLength={LIMITS.expectedSalary}
          error={errors.expectedSalary}
        />
        <Field
          label="Availability / Start Date"
          name="availability"
          placeholder="e.g. Immediately, 2 weeks notice"
          maxLength={LIMITS.availability}
          error={errors.availability}
        />
      </div>
      <TextareaField
        label="Relevant Licenses / Certifications"
        name="licenses"
        rows={3}
        maxLength={LIMITS.licenses}
        placeholder="Texas irrigator license (LI), drainage experience, valid driver's license, etc."
        error={errors.licenses}
      />
      <TextareaField
        label="Why You?"
        name="whyYou"
        rows={4}
        maxLength={LIMITS.whyYou}
        placeholder="A few lines on your background and why you'd be a good fit."
        error={errors.whyYou}
      />
      <label className="flex flex-col gap-2">
        <Label label="Upload Resume (optional)" />
        <input
          type="file"
          name="resumeFile"
          accept={RESUME_ACCEPT}
          onChange={(ev) => {
            const f = ev.currentTarget.files?.[0];
            setFileError(f ? validateResumeFile(f) || "" : "");
          }}
          aria-invalid={fileError ? true : undefined}
          className={`${inputCls} ${fileError ? "border-red-400" : "border-gray-300"} file:mr-4 file:border-0 file:bg-irrigation-blue file:text-white file:rounded file:px-3 file:py-1.5 file:font-semibold`}
        />
        <span className="text-xs text-gray-500">PDF, DOC, or DOCX, up to 4 MB.</span>
        {fileError && <span className="text-xs text-red-600">{fileError}</span>}
      </label>
      <Field
        label="Or Resume Link (optional)"
        name="resumeUrl"
        type="url"
        placeholder="https:// link to Google Drive, Dropbox, etc."
        maxLength={LIMITS.resumeUrl}
        error={errors.resumeUrl}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-gray-500">
          <span className="text-irrigation-blue">*</span> Required. We&apos;ll contact you
          using the details above.
        </p>
        <Button type="submit" disabled={status === "sending"} className="bg-irrigation-blue hover:bg-irrigation-darkBlue text-white">
          {status === "sending" ? (
            <>
              <Loader2 size={14} className="animate-spin mr-2" />
              Submitting…
            </>
          ) : (
            <>
              <Send size={14} className="mr-2" />
              Submit Application
            </>
          )}
        </Button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700 border border-red-200 bg-red-50 px-4 py-3 rounded-lg">
          {errorMsg} You can also call{" "}
          <a className="underline" href="tel:+18173047896">
            (817) 304-7896
          </a>{" "}
          or email{" "}
          <a className="underline" href="mailto:sprinkleranddrains@gmail.com">
            sprinkleranddrains@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}

const inputCls =
  "border rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-irrigation-blue focus:border-irrigation-blue transition-colors w-full bg-white";

function Label({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="text-sm font-semibold text-gray-800">
      {label}
      {required && <span className="text-irrigation-blue ml-1">*</span>}
    </span>
  );
}

function Field({
  label,
  name,
  error,
  required,
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-2">
      <Label label={label} required={required} />
      <input
        {...rest}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-required={required}
        className={`${inputCls} ${error ? "border-red-400" : "border-gray-300"}`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

function TextareaField({
  label,
  name,
  error,
  rows = 4,
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="flex flex-col gap-2">
      <Label label={label} />
      <textarea
        {...rest}
        name={name}
        rows={rows}
        className={`${inputCls} resize-y ${error ? "border-red-400" : "border-gray-300"}`}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

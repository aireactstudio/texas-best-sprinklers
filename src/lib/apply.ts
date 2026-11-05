// Shared validation for the employment application form (client + server).
// Modeled on ntxpowerline/lib/apply.ts, with Texas Best role types.

export type ApplicationInput = {
  fullName: string;
  phone: string;
  email: string;
  expectedSalary: string;
  position: string;
  cityState: string;
  yearsExperience: string;
  licenses: string;
  availability: string;
  whyYou: string;
  resumeUrl: string;
};

export const LIMITS = {
  fullName: 120,
  phone: 40,
  email: 200,
  expectedSalary: 80,
  position: 120,
  cityState: 120,
  licenses: 1000,
  availability: 120,
  whyYou: 1500,
  resumeUrl: 500,
} as const;

export type FieldErrors = Partial<Record<keyof ApplicationInput, string>>;

// Role types we typically hire for in DFW — not a promise of a current opening.
// TODO(Christopher): replace or trim this list when you have named openings.
export const positionSuggestions = [
  "Irrigation Technician",
  "Sprinkler Repair Technician",
  "Irrigation Installer",
  "Drainage Technician",
  "Outdoor Lighting Technician",
  "Crew Helper / Laborer",
  "Other",
];

export function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function normalize(raw: Record<string, unknown>): ApplicationInput {
  return {
    fullName: clean(raw.fullName, LIMITS.fullName),
    phone: clean(raw.phone, LIMITS.phone),
    email: clean(raw.email, LIMITS.email),
    expectedSalary: clean(raw.expectedSalary, LIMITS.expectedSalary),
    position: clean(raw.position, LIMITS.position),
    cityState: clean(raw.cityState, LIMITS.cityState),
    yearsExperience: clean(raw.yearsExperience, 10),
    licenses: clean(raw.licenses, LIMITS.licenses),
    availability: clean(raw.availability, LIMITS.availability),
    whyYou: clean(raw.whyYou, LIMITS.whyYou),
    resumeUrl: clean(raw.resumeUrl, LIMITS.resumeUrl),
  };
}

export function validate(v: ApplicationInput): FieldErrors {
  const e: FieldErrors = {};
  if (v.fullName.length < 2) e.fullName = "Please enter your full name.";
  if (v.phone.replace(/\D/g, "").length < 10)
    e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email))
    e.email = "Please enter a valid email address.";
  if (!v.position) e.position = "Please tell us the position you're applying for.";
  if (v.cityState.length < 4 || !/(,\s*[A-Za-z .]{2,}|\s[A-Za-z]{2})$/.test(v.cityState))
    e.cityState = "Please enter your city and state (e.g. Fort Worth, TX).";
  if (v.yearsExperience) {
    const n = Number(v.yearsExperience);
    if (!Number.isFinite(n) || n < 0 || n > 60)
      e.yearsExperience = "Enter years of experience as a number from 0 to 60.";
  }
  if (v.resumeUrl) {
    let ok = false;
    try {
      const u = new URL(v.resumeUrl);
      ok = u.protocol === "https:" || u.protocol === "http:";
    } catch {
      ok = false;
    }
    if (!ok) e.resumeUrl = "Enter a full link starting with https://";
  }
  return e;
}

// Resume upload: kept well under Netlify's ~6MB function payload limit,
// which applies after base64 encoding (~1.33x inflation).
export const RESUME_MAX_BYTES = 4 * 1024 * 1024;
export const RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
export const RESUME_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export function validateResumeFile(file: { name: string; size: number }): string | null {
  const name = file.name.toLowerCase();
  if (!RESUME_EXTENSIONS.some((ext) => name.endsWith(ext)))
    return "Resume must be a PDF, DOC, or DOCX file.";
  if (file.size <= 0) return "That resume file looks empty. Please choose another.";
  if (file.size > RESUME_MAX_BYTES)
    return "Resume must be 4 MB or smaller. Try a PDF, or paste a link instead.";
  return null;
}

export function resumeContentType(name: string): string {
  const n = name.toLowerCase();
  if (n.endsWith(".pdf")) return "application/pdf";
  if (n.endsWith(".docx"))
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  return "application/msword";
}

/**
 * Public-facing contact and location hints. Update with official channels when confirmed.
 * Website: https://icfgindia.org
 */
export const INSTITUTE_CONTACT = {
  /** Shown in UI; replace with a monitored inbox when available. */
  emailDisplay: "info@icfgindia.org",
  emailMailto: "mailto:info@icfgindia.org",
  /** Broad location only—avoid publishing full street without verification. */
  region: "Jharkhand, India",
  responseTime:
    "We aim to reply within 5–10 working days. During intensive field work, it may take a little longer.",
  officeHours: "Field coordination is by appointment. Written inquiries via the form are preferred.",
} as const;

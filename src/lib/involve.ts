import { postToSheet } from "@/lib/sheet-webhook";

export const WANT_TO_OPTIONS = [
  "Endorse",
  "Volunteer",
  "Get Updates",
  "Get A Sign",
] as const;

export type WantTo = (typeof WANT_TO_OPTIONS)[number];

export type GetInvolvedPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  iWantTo: WantTo[];
};

export function parseWantTo(formData: FormData): WantTo[] {
  return formData
    .getAll("iWantTo")
    .map(String)
    .filter((value): value is WantTo =>
      (WANT_TO_OPTIONS as readonly string[]).includes(value),
    );
}

export async function saveGetInvolved(formData: FormData) {
  const iWantTo = parseWantTo(formData);
  if (!iWantTo.length) {
    return {
      ok: false as const,
      error: "Pick at least one: Endorse, Volunteer, Get Updates, or Get A Sign.",
    };
  }

  const payload: GetInvolvedPayload = {
    firstName: String(formData.get("firstName") ?? "").trim(),
    lastName: String(formData.get("lastName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    zip: String(formData.get("zip") ?? "").trim(),
    iWantTo,
  };

  if (!payload.firstName || !payload.lastName || !payload.email || !payload.zip) {
    return {
      ok: false as const,
      error: "First name, last name, email, and ZIP are required.",
    };
  }

  return postToSheet(payload);
}

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

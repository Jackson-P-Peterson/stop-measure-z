"use server";

import { saveGetInvolved } from "@/lib/involve";
import { postToSheet } from "@/lib/sheet-webhook";

export type FormKind = "endorse" | "volunteer" | "sign" | "involved";

export async function submitGetInvolved(formData: FormData) {
  return saveGetInvolved(formData);
}

export async function submitCampaignForm(kind: FormKind, payload: Record<string, string>) {
  const iWantTo =
    kind === "endorse"
      ? ["Endorse"]
      : kind === "sign"
        ? ["Get A Sign"]
        : kind === "volunteer"
          ? ["Volunteer"]
          : [];

  const name = payload.name?.trim() ?? "";
  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || name;

  return postToSheet({
    firstName: firstName || "",
    lastName,
    email: payload.email ?? "",
    phone: payload.phone ?? "",
    zip: payload.zip ?? payload.neighborhood ?? "",
    iWantTo,
  });
}

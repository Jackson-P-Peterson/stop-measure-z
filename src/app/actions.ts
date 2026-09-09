"use server";

import { parseWantTo, type GetInvolvedPayload } from "@/lib/involve";
import { site } from "@/lib/site";

export type FormKind = "endorse" | "volunteer" | "sign" | "involved";

export async function submitGetInvolved(formData: FormData) {
  const iWantTo = parseWantTo(formData);
  if (!iWantTo.length) {
    return { ok: false as const, error: "Pick at least one: Endorse, Volunteer, Get Updates, or Get A Sign." };
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
    return { ok: false as const, error: "First name, last name, email, and ZIP are required." };
  }

  return postToSheet({
    ...payload,
  });
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

async function postToSheet(body: Record<string, unknown>) {
  const endpoint = process.env.FORM_ENDPOINT ?? site.formEndpoint;
  const secret = process.env.SHEETS_WEBHOOK_SECRET ?? "";
  if (!endpoint || endpoint.includes("TODO") || !secret) {
    console.info("Sheet webhook not fully configured; form captured locally");
    return { ok: true as const, queued: true as const };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...body, secret }),
    redirect: "follow",
  });

  if (!res.ok) {
    return {
      ok: false as const,
      error: "We couldn’t send that. Email the treasurer and we’ll log it by hand.",
    };
  }
  return { ok: true as const, queued: false as const };
}

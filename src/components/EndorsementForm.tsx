"use client";

import { useState } from "react";
import { submitCampaignForm } from "@/app/actions";
import { track } from "@/lib/analytics";

export function EndorsementForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
    const result = await submitCampaignForm("endorse", payload);
    if (result.ok) {
      track("endorse_submit");
      setStatus("ok");
      setMessage(
        result.queued
          ? "Saved locally until FORM_ENDPOINT is set. Thank you."
          : "Thank you. We’ll be in touch if you asked for a sign.",
      );
    } else {
      setStatus("err");
      setMessage(result.error ?? "Something went wrong.");
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4 border border-rule bg-paper p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="neighborhood" label="Neighborhood" required />
        <Field name="title" label="Title (optional)" />
      </div>
      <label className="grid gap-1 text-sm">
        Quote
        <textarea
          name="quote"
          rows={4}
          className="border border-ink px-3 py-2"
          placeholder="One sentence neighbors can stand behind."
        />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="publicName" value="yes" className="mt-1" />
        Use my name publicly
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="signs" value="yes" className="mt-1" />
        Contact me about signs
      </label>
      <button type="submit" className="w-fit bg-eucalyptus px-5 py-2 text-paper">
        Endorse No on Z
      </button>
      {status !== "idle" ? (
        <p className={status === "ok" ? "text-eucalyptus" : "text-terracotta"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

export function VolunteerForm({
  kind,
  title,
}: {
  kind: "volunteer" | "sign";
  title: string;
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
    const result = await submitCampaignForm(kind, payload);
    if (result.ok) {
      if (kind === "sign") track("sign_request");
      setStatus("ok");
      setMessage(
        result.queued
          ? "Logged. Set FORM_ENDPOINT to deliver this to the list."
          : "Got it. A neighbor will follow up.",
      );
    } else {
      setStatus("err");
      setMessage(result.error ?? "Something went wrong.");
    }
  }

  return (
    <form action={onSubmit} className="grid gap-3">
      <h3 className="font-serif text-2xl">{title}</h3>
      <Field name="name" label="Name" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="phone" label="Mobile (optional)" />
      <Field name="zip" label="ZIP" required />
      {kind === "volunteer" ? (
        <label className="grid gap-1 text-sm">
          I can help with
          <select name="shift" className="border border-ink px-3 py-2">
            <option>Text bank</option>
            <option>Lit drop Saturdays</option>
            <option>Farmers markets</option>
            <option>Hills house party</option>
          </select>
        </label>
      ) : (
        <p className="text-sm text-bay">
          Lawn signs first in 94705, 94707, 94708, 94709, 94703.
        </p>
      )}
      <button type="submit" className="w-fit border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper">
        Submit
      </button>
      {status !== "idle" ? (
        <p className="text-sm" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="border border-ink px-3 py-2"
      />
    </label>
  );
}

"use client";

import { useState } from "react";
import { submitGetInvolved } from "@/app/actions";
import { track } from "@/lib/analytics";
import { WANT_TO_OPTIONS } from "@/lib/involve";

export function GetInvolvedForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    const result = await submitGetInvolved(formData);
    if (!result.ok) {
      setStatus("err");
      setMessage(result.error);
      return;
    }

    const selected = formData.getAll("iWantTo").map(String);
    if (selected.includes("Endorse")) track("endorse_submit");
    if (selected.includes("Get A Sign")) track("sign_request");

    setStatus("ok");
    setMessage(
      result.queued
        ? "Saved on this computer. Deploy the sheet webhook (see README) so rows land in the spreadsheet."
        : "You’re on the list. A neighbor will follow up.",
    );
  }

  return (
    <form action={onSubmit} className="grid gap-5 border border-rule bg-paper p-5 sm:p-8">
      <fieldset>
        <legend className="font-serif text-2xl">I want to</legend>
        <p className="mt-1 text-sm text-bay">Select as many as apply.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WANT_TO_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex min-h-11 items-center gap-3 border border-rule px-3 py-2 has-[:checked]:border-eucalyptus has-[:checked]:bg-sage/70"
            >
              <input
                type="checkbox"
                name="iWantTo"
                value={option}
                className="size-4 accent-eucalyptus"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="firstName" label="First name" required autoComplete="given-name" />
        <Field name="lastName" label="Last name" required autoComplete="family-name" />
        <Field name="email" label="Email" type="email" required autoComplete="email" />
        <Field name="phone" label="Phone number" type="tel" autoComplete="tel" />
        <Field name="zip" label="ZIP code" required autoComplete="postal-code" />
      </div>

      <p className="text-sm text-bay">
        Lawn signs first in 94705, 94707, 94708, 94709, 94703. Hills hosts: check
        Volunteer.
      </p>

      <button
        type="submit"
        className="min-h-12 w-full bg-eucalyptus px-5 py-3 text-paper hover:bg-bay sm:w-fit"
      >
        Send
      </button>

      {status !== "idle" ? (
        <p className={status === "ok" ? "text-eucalyptus" : "text-terracotta"} role="status">
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
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1 text-sm">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-11 border border-ink px-3 py-2 text-base"
      />
    </label>
  );
}

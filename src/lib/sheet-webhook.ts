const FAIL =
  "We couldn’t send that. Email campaign@stopmeasurez.com and we’ll add you.";

function isAppsScriptWebApp(url: string): boolean {
  return /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec\/?$/i.test(url);
}

export async function postToSheet(body: Record<string, unknown>) {
  const endpoint = (process.env.FORM_ENDPOINT ?? "").trim();
  const secret = (process.env.SHEETS_WEBHOOK_SECRET ?? "").trim();

  if (!endpoint || !secret) {
    console.error("FORM_ENDPOINT or SHEETS_WEBHOOK_SECRET is missing");
    return { ok: false as const, error: FAIL };
  }

  if (!isAppsScriptWebApp(endpoint)) {
    console.error(
      "FORM_ENDPOINT must be an Apps Script Web app URL ending in /exec, not a library URL",
    );
    return { ok: false as const, error: FAIL };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...body, secret }),
      redirect: "follow",
    });

    const text = await res.text();
    let parsed: { ok?: boolean } | null = null;
    try {
      parsed = JSON.parse(text) as { ok?: boolean };
    } catch {
      parsed = null;
    }

    if (!res.ok || !parsed?.ok) {
      console.error("Sheet webhook rejected the row", res.status);
      return { ok: false as const, error: FAIL };
    }

    return { ok: true as const, queued: false as const };
  } catch (error) {
    console.error("Sheet webhook request failed", error);
    return { ok: false as const, error: FAIL };
  }
}

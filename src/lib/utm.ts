export type Utm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
};

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

const STORAGE_KEY = "smz_utm";

export function readUtmFromSearch(search: string): Utm {
  const params = new URLSearchParams(search);
  const utm: Utm = {};
  for (const key of KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export function persistUtm(utm: Utm) {
  if (typeof window === "undefined") return;
  if (!Object.keys(utm).length) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
}

export function loadPersistedUtm(): Utm {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Utm) : {};
  } catch {
    return {};
  }
}

export function withUtm(url: string, utm: Utm): string {
  const parsed = new URL(url, "https://stopmeasurez.com");
  for (const key of KEYS) {
    const value = utm[key];
    if (value) parsed.searchParams.set(key, value);
  }
  if (url.startsWith("http")) return parsed.toString();
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

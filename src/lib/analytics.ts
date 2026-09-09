export type AnalyticsEvent =
  | "calculator_submit"
  | "donate_click"
  | "endorse_submit"
  | "sign_request"
  | "faq_expand";

export function track(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const plausible = (
    window as Window & {
      plausible?: (e: string, o?: { props?: Record<string, string | number | boolean> }) => void;
    }
  ).plausible;
  plausible?.(event, props ? { props } : undefined);
}

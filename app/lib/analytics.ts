// GA4 event helper. Never pass personal data (names, emails, phone numbers,
// message text) as event parameters.

type EventParams = Record<string, string | number>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // If analytics has not loaded yet, define gtag exactly as Google's snippet
  // does so the event is queued and processed when gtag.js arrives.
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag("event", name, params);
}

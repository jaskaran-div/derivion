"use client";

import { useEffect } from "react";
import { trackEvent } from "@/app/lib/analytics";

// Sends a GA4 `contact_click` event when a phone or email link is clicked
// anywhere on the site. Only the method and page path are recorded.
export default function ContactClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href^='tel:'], a[href^='mailto:']");
      if (!link) return;
      trackEvent("contact_click", {
        method: link.getAttribute("href")!.startsWith("tel:") ? "phone" : "email",
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

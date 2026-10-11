"use client";

import { track } from "@vercel/analytics";

/** Safe click/event tracking for Vercel Web Analytics */
export function trackEvent(
  name: string,
  data?: Record<string, string | number | boolean | undefined>,
) {
  try {
    track(name, data);
  } catch {
    // Analytics may be unavailable locally — never block UX
  }
}

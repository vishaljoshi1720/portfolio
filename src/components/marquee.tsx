"use client";

import { site } from "@/data/site";

const items = [
  ...site.services,
  "App Store release",
  "Play Store release",
  "Crash-free sessions",
  "Realtime sockets",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-soft py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-soft to-transparent" />
      <div className="marquee-track flex gap-10 whitespace-nowrap px-6 font-mono text-xs uppercase tracking-[0.22em] text-muted">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
            <span className="text-fg/80">{item}</span>
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/track";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearTop = window.scrollY < 420;
      const contact = document.getElementById("contact");
      let nearContact = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        nearContact = rect.top < window.innerHeight * 0.85;
      }
      setVisible(!nearTop && !nearContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 px-3 pb-[max(0.75rem,var(--safe-bottom))] pt-2 backdrop-blur-xl transition duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a
          href={site.links.booking}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("cta_book", { location: "sticky_mobile" })}
          className="inline-flex min-h-11 items-center justify-center bg-accent px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-ink"
        >
          Book intro
        </a>
        <a
          href={site.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("cta_whatsapp", { location: "sticky_mobile" })
          }
          className="inline-flex min-h-11 items-center justify-center border border-line-strong px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-fg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

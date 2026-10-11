"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-line py-16 sm:py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          index="// 05 · contact"
          title="Need a senior mobile engineer?"
          hint="Startups · agencies · US/EU remote · India local"
        />
        <Reveal>
          <div className="grid gap-10 border border-line bg-bg-panel/80 p-8 backdrop-blur-sm md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:p-12">
            <div>
              <p className="max-w-xl text-2xl leading-snug tracking-tight md:text-[2rem]">
                Tell me about the app, timeline, and where it hurts — architecture,
                payments, performance, or shipping.
              </p>
              <p className="mt-5 font-mono text-sm text-muted">
                Prefer email. Response usually within 24–48h.
              </p>
              <motion.a
                href={`mailto:${site.email}?subject=Freelance%20mobile%20project`}
                data-cursor-label="mail"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-9 inline-flex items-center bg-accent px-6 py-3.5 font-mono text-sm font-medium text-accent-ink"
              >
                {site.email}
              </motion.a>
            </div>
            <div className="font-mono text-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                ./channels
              </p>
              <ul className="mt-5 space-y-1 text-muted">
                {[
                  { label: "email", href: `mailto:${site.email}`, external: false },
                  {
                    label: "linkedin",
                    href: site.links.linkedin,
                    external: true,
                  },
                  { label: "github", href: site.links.github, external: true },
                ].map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      data-cursor-label="go"
                      className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors hover:text-accent"
                    >
                      <span>{row.label}</span>
                      <span className="translate-x-0 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex justify-between gap-4 py-3.5">
                  <span>status</span>
                  <span className="inline-flex items-center gap-2 text-accent">
                    <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                    {site.status}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

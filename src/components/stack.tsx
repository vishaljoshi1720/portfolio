"use client";

import { skills } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

const groups = [
  { key: "platforms", label: "platforms" },
  { key: "craft", label: "craft" },
  { key: "data", label: "data" },
  { key: "ship", label: "ship" },
] as const;

export function Stack() {
  return (
    <section id="stack" className="section-pad border-t border-line py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 04 · stack"
          title="Tools that survive production."
          hint="What I reach for when the app has to stay live."
        />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.04}>
              <div className="h-full bg-bg-panel p-6 md:p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  ./{group.label}
                </p>
                <ul>
                  {skills[group.key].map((item) => (
                    <li
                      key={item}
                      className="border-b border-line py-2.5 font-mono text-sm text-fg/85 last:border-0"
                    >
                      <span className="mr-2 text-dim">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

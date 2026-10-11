"use client";

import { testimonials } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

export function Testimonials() {
  return (
    <section
      id="notes"
      className="section-pad border-t border-line bg-bg-soft py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 05 · client_notes"
          title="What collaborators say."
          hint="From people I've shipped with."
        />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.04}>
              <figure className="flex h-full flex-col bg-bg p-7 md:p-9">
                <div className="flex flex-wrap gap-2">
                  <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {item.region}
                  </span>
                  <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                    {item.source}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-fg/90">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="font-semibold text-fg">{item.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{item.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

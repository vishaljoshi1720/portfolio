"use client";

import { engagements, process } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";
import { trackEvent } from "@/lib/track";

export function Engage() {
  return (
    <section
      id="engage"
      className="section-pad border-t border-line bg-bg-soft py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 02 · how_to_hire"
          title="Clear engagement. No mystery process."
          hint="Pick a shape — quote after we understand the brief."
        />

        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <li className="flex h-full flex-col bg-bg p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] text-dim">{item.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    {item.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg sm:text-xl">
                  {item.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 sm:mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            // process
          </p>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.03}>
                <li>
                  <p className="font-mono text-sm text-dim">{step.step}</p>
                  <h4 className="mt-2 text-base font-semibold text-fg">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-10 sm:mt-12">
          <a
            href="#contact"
            onClick={() => trackEvent("cta_contact", { location: "engage" })}
            className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition hover:opacity-80"
          >
            Ready? Jump to contact →
          </a>
        </p>
      </div>
    </section>
  );
}

"use client";

import { experience } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-t border-line bg-bg-soft py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 02 · experience"
          title="Where the craft was sharpened."
        />

        <ol className="relative ml-3 border-l border-line-strong lg:ml-0 lg:border-l-0">
          <span
            aria-hidden
            className="absolute bottom-4 left-[11.75rem] top-4 hidden w-px bg-line-strong lg:block"
          />

          {experience.map((job, i) => (
            <li key={job.company}>
              <Reveal delay={i * 0.04}>
                <article className="relative grid gap-3 py-7 pl-7 sm:gap-4 sm:py-8 lg:grid-cols-[10.5rem_2.5rem_minmax(0,1fr)] lg:gap-0 lg:py-10 lg:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-[-4px] top-9 size-2 rounded-full border border-accent bg-bg lg:hidden"
                  />

                  <div className="lg:pr-6 lg:text-right">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent sm:text-xs">
                      {job.period}
                    </p>
                    <p className="mt-1.5 font-mono text-xs text-muted">
                      {job.place}
                    </p>
                  </div>

                  <div className="relative hidden lg:flex lg:justify-center">
                    <span
                      aria-hidden
                      className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-accent bg-bg-soft"
                    />
                  </div>

                  <div className="min-w-0 lg:pl-8">
                    <h3 className="text-lg font-semibold tracking-tight text-fg sm:text-xl lg:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-muted">
                      {job.company}
                    </p>
                    <ul className="mt-4 max-w-2xl space-y-2.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 size-1 shrink-0 bg-accent" />
                          <span className="min-w-0">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

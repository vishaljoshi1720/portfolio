"use client";

import { projects } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

export function Work() {
  return (
    <section id="work" className="section-pad border-t border-line py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 01 · selected_work"
          title="Apps shipped to production."
          hint="Live on the App Store and Google Play — open either store."
        />

        <ul className="border-t border-line">
          {projects.map((project, i) => (
            <li key={project.id} className="border-b border-line">
              <Reveal delay={i * 0.03}>
                <div className="grid gap-4 py-8 sm:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_auto] lg:items-start lg:gap-8 lg:py-12">
                  <span className="font-mono text-sm text-dim">{project.id}</span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl lg:text-[1.85rem]">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        {project.domain}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
                      {project.summary}
                    </p>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-accent">
                      → {project.outcome}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:flex-col lg:items-stretch">
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center border border-line-strong px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
                    >
                      App Store ↗
                    </a>
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center border border-line-strong px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
                    >
                      Play Store ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

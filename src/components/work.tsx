"use client";

import Image from "next/image";
import { projects } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";
import { trackEvent } from "@/lib/track";

export function Work() {
  return (
    <section id="work" className="section-pad border-t border-line py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 01 · selected_work"
          title="Apps shipped to production."
          hint="Case studies from live App Store & Play listings — role, challenge, result."
        />

        <ul className="space-y-16 sm:space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <li key={project.id} className="border-t border-line pt-10 sm:pt-12">
              <Reveal delay={i * 0.03}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-sm text-dim">{project.id}</span>
                    <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl lg:text-[1.85rem]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      {project.domain}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {project.role}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                      Challenge
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                      Approach
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
                      {project.approach}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                      Result
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-accent sm:text-base">
                      → {project.outcome}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 -mx-4 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:-mx-0 sm:px-0 [scrollbar-width:thin]"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <ul className="flex w-max gap-3 sm:gap-4">
                    {project.screenshots.map((src, si) => (
                      <li
                        key={src}
                        className="relative aspect-[9/16] h-[280px] w-auto shrink-0 overflow-hidden border border-line bg-bg-panel sm:h-[340px] md:h-[400px]"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${si + 1}`}
                          fill
                          sizes="(max-width: 640px) 158px, (max-width: 768px) 191px, 225px"
                          className="object-cover"
                          loading={i === 0 && si < 2 ? "eager" : "lazy"}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  <a
                    href={project.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("store_click", {
                        project: project.title,
                        store: "ios",
                      })
                    }
                    className="inline-flex min-h-11 items-center justify-center border border-line-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
                  >
                    App Store ↗
                  </a>
                  <a
                    href={project.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("store_click", {
                        project: project.title,
                        store: "android",
                      })
                    }
                    className="inline-flex min-h-11 items-center justify-center border border-line-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
                  >
                    Play Store ↗
                  </a>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

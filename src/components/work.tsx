"use client";

import Image from "next/image";
import Link from "next/link";
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
          hint="Case studies from live store apps — problem, role, impact, screens."
        />

        <ul className="space-y-20 sm:space-y-28 md:space-y-36">
          {projects.map((project, i) => {
            const mediaFirst = i % 2 === 1;

            return (
              <li key={project.id}>
                <Reveal delay={i * 0.03}>
                  <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                    <div className={mediaFirst ? "lg:order-2" : ""}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] text-dim">
                          {project.id}
                        </span>
                        <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                          {project.domain}
                        </span>
                        <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                          {project.platforms}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl lg:text-[2.35rem] lg:leading-[1.08]">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base">
                        {project.summary}
                      </p>

                      <dl className="mt-8 space-y-5 border-t border-line pt-6">
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                            Role
                          </dt>
                          <dd className="mt-1.5 text-sm text-accent sm:text-[15px]">
                            {project.role}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                            Challenge
                          </dt>
                          <dd className="mt-1.5 max-w-lg text-sm leading-relaxed text-fg/90 sm:text-[15px]">
                            {project.challenge}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                            What I shipped
                          </dt>
                          <dd className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
                            {project.approach}
                          </dd>
                        </div>
                      </dl>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.metrics.map((metric) => (
                          <li
                            key={metric}
                            className="border border-accent/35 bg-accent/5 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-accent"
                          >
                            {metric}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                        {project.stack.join(" · ")}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        <Link
                          href={`/work/${project.slug}`}
                          onClick={() =>
                            trackEvent("case_study_click", {
                              project: project.title,
                            })
                          }
                          className="inline-flex min-h-11 items-center justify-center border border-line-strong bg-fg px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bg transition hover:border-accent hover:bg-accent hover:text-accent-ink"
                        >
                          Case study →
                        </Link>
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
                    </div>

                    <div className={mediaFirst ? "lg:order-1" : ""}>
                      <div className="relative overflow-hidden border border-line bg-bg-soft">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(200,245,66,0.06),transparent_70%)]"
                        />
                        <div
                          className="relative overflow-x-auto overscroll-x-contain px-4 py-6 [scrollbar-width:none] sm:px-5 sm:py-8 md:px-6 [&::-webkit-scrollbar]:hidden"
                          style={{ WebkitOverflowScrolling: "touch" }}
                        >
                          <ul className="flex w-max snap-x snap-mandatory gap-3 sm:gap-4">
                            {project.shots.map((shot, si) => (
                              <li
                                key={shot.src}
                                className="w-[132px] shrink-0 snap-center sm:w-[148px] md:w-[160px]"
                              >
                                <div className="relative aspect-[9/16] overflow-hidden border border-line-strong/60 bg-bg shadow-[0_20px_40px_-24px_rgba(0,0,0,0.85)]">
                                  <Image
                                    src={shot.src}
                                    alt={`${project.title} — ${shot.label}`}
                                    fill
                                    sizes="(max-width: 640px) 132px, (max-width: 768px) 148px, 160px"
                                    className="object-cover"
                                    loading={i === 0 && si < 2 ? "eager" : "lazy"}
                                  />
                                </div>
                                <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                                  {shot.label}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim sm:px-5">
                          Swipe · App Store screenshots
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

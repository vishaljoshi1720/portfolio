import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudy,
  getProject,
  projects,
  site,
} from "@/data/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ClientChrome } from "@/components/client-chrome";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study" };

  return {
    title: `${project.title} case study`,
    description: project.summary,
    alternates: {
      canonical: `https://vishaljoshi.vercel.app/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const deep = getCaseStudy(slug);

  return (
    <>
      <ClientChrome />
      <Nav />
      <main id="main" className="flex-1">
        <article className="section-pad border-b border-line pb-16 pt-28 sm:pb-24 sm:pt-32">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/#work"
              className="font-mono text-xs text-muted transition hover:text-accent"
            >
              ← back to work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {project.domain}
              </span>
              <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {project.platforms}
              </span>
              <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Case study
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl md:leading-[1.05]">
              {deep?.headline ?? project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>

            <dl className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Role
                </dt>
                <dd className="mt-2 text-sm text-fg">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Stack
                </dt>
                <dd className="mt-2 text-sm text-muted">
                  {project.stack.join(" · ")}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Impact
                </dt>
                <dd className="mt-2 text-sm text-accent">
                  {project.metrics.join(" · ")}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={project.links.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-line-strong bg-fg px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bg transition hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                App Store ↗
              </a>
              <a
                href={project.links.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-line-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
              >
                Play Store ↗
              </a>
            </div>
          </div>
        </article>

        <section className="section-pad border-b border-line py-14 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Screenshots
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {project.shots.map((shot) => (
                <li key={shot.src}>
                  <div className="relative aspect-[9/16] overflow-hidden border border-line bg-bg-soft">
                    <Image
                      src={shot.src}
                      alt={`${project.title} — ${shot.label}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {shot.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-pad border-b border-line py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fg/90 sm:text-lg">
                {deep?.problem ?? project.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                What I shipped
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {project.approach}
              </p>
            </div>
          </div>
        </section>

        {deep ? (
          <>
            <section className="section-pad border-b border-line bg-bg-soft py-14 sm:py-20">
              <div className="mx-auto max-w-7xl">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Challenges solved
                </h2>
                <ul className="mt-8 space-y-8">
                  {deep.challenges.map((item) => (
                    <li
                      key={item.title}
                      className="border-t border-line pt-8 first:border-t-0 first:pt-0"
                    >
                      <h3 className="text-xl font-semibold tracking-tight text-fg">
                        {item.title}
                      </h3>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-8">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                            Problem
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                            Solution
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-fg/90">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-pad border-b border-line py-14 sm:py-20">
              <div className="mx-auto max-w-7xl">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Timeline
                </h2>
                <ol className="mt-8 grid gap-6 sm:grid-cols-3">
                  {deep.timeline.map((item) => (
                    <li key={item.phase} className="border border-line p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        {item.phase}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="section-pad border-b border-line py-14 sm:py-20">
              <div className="mx-auto max-w-7xl">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Outcomes
                </h2>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {deep.outcomes.map((item) => (
                    <li
                      key={item}
                      className="border border-accent/30 bg-accent/5 px-4 py-3 font-mono text-sm text-accent"
                    >
                      → {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : null}

        <section className="section-pad py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Want results like this?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Free intro call — scope, timeline, and whether I’m the right hire.
              No pitch deck required.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={site.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex min-h-11 items-center justify-center bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-ink transition hover:brightness-110"
              >
                Book intro call
              </a>
              <Link
                href="/#work"
                className="inline-flex min-h-11 items-center justify-center border border-line-strong px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
              >
                More work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

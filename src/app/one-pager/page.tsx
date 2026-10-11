"use client";

import Link from "next/link";
import { site, projects } from "@/data/site";
import { trackEvent } from "@/lib/track";

export default function OnePagerPage() {
  return (
    <div className="min-h-svh bg-bg text-fg print:bg-white print:text-black">
      <div className="section-pad border-b border-line py-4 print:hidden">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <Link href="/" className="font-mono text-xs text-muted hover:text-accent">
            ← back to portfolio
          </Link>
          <button
            type="button"
            onClick={() => {
              trackEvent("one_pager_print");
              window.print();
            }}
            className="btn-primary inline-flex min-h-11 items-center bg-accent px-4 py-2 font-mono text-xs font-medium text-accent-ink"
          >
            Save / Print PDF
          </button>
        </div>
      </div>

      <article className="section-pad mx-auto max-w-3xl py-10 print:max-w-none print:px-8 print:py-6">
        <header className="border-b border-line pb-6 print:border-black/20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent print:text-black">
            Freelance rate card · 2026
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-1 text-muted print:text-neutral-600">
            {site.role} · React Native & Flutter · 5.2+ years
          </p>
          <p className="mt-3 font-mono text-xs text-muted print:text-neutral-600">
            {site.email} · {site.phoneDisplay} · {site.location}
          </p>
          <p className="mt-1 font-mono text-xs text-accent print:text-black">
            Book: {site.links.booking}
          </p>
          <p className="mt-1 font-mono text-xs text-accent print:text-black">
            WhatsApp: {site.phoneDisplay}
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent print:text-black">
            What I do
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fg/90 print:text-neutral-800">
            Senior mobile engineer for startups and agencies. I own production
            React Native & Flutter apps — architecture, payments, performance,
            CI/CD, and App Store / Play release.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {site.services.map((s) => (
              <li
                key={s}
                className="border border-line px-3 py-2 font-mono text-xs text-muted print:border-neutral-300 print:text-neutral-700"
              >
                › {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent print:text-black">
            Recent live apps
          </h2>
          <ul className="mt-3 space-y-2">
            {projects.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-2 text-sm print:border-neutral-200"
              >
                <span className="font-semibold">{p.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted print:text-neutral-500">
                  {p.domain}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent print:text-black">
            Engagement & rates
          </h2>
          <p className="mt-3 text-sm text-muted print:text-neutral-600">
            {site.rates.note}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="border border-line p-4 print:border-neutral-300">
              <p className="font-mono text-[10px] uppercase tracking-wider text-dim print:text-neutral-500">
                US / UK / EU
              </p>
              <p className="mt-1 text-lg font-semibold text-accent print:text-black">
                {site.rates.hourlyIntl}
              </p>
            </div>
            <div className="border border-line p-4 print:border-neutral-300">
              <p className="font-mono text-[10px] uppercase tracking-wider text-dim print:text-neutral-500">
                India / local agency
              </p>
              <p className="mt-1 text-lg font-semibold text-accent print:text-black">
                {site.rates.hourlyIndia}
              </p>
            </div>
          </div>

          <ul className="mt-4 space-y-3">
            {site.rates.packages.map((pkg) => (
              <li
                key={pkg.name}
                className="border border-line p-4 print:border-neutral-300"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{pkg.name}</p>
                  <p className="font-mono text-xs text-accent print:text-black">
                    {pkg.priceIntl}
                    <span className="text-dim print:text-neutral-500"> · </span>
                    {pkg.priceIndia}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted print:text-neutral-600">
                  {pkg.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-10 border-t border-line pt-6 font-mono text-xs text-muted print:border-neutral-300 print:text-neutral-600">
          <p>
            Next step: book a free 15-min intro, WhatsApp, or email a short
            brief.
          </p>
          <p className="mt-2 text-fg/80 print:text-black">
            Portfolio: https://vishaljoshi.vercel.app
          </p>
        </footer>
      </article>
    </div>
  );
}

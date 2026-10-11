"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/track";

const ease = [0.22, 1, 0.36, 1] as const;

const outcomes = [
  {
    title: "Ship a store-ready app",
    detail: "Architecture → App Store / Play — owned end-to-end.",
  },
  {
    title: "Fix crash & release pain",
    detail: "Stability, CI, and launch confidence for your users.",
  },
  {
    title: "Payments that convert",
    detail: "Stripe, RevenueCat, subscriptions — built to sell.",
  },
  {
    title: "A senior mobile owner",
    detail: "Not ticket-taking — decisions, delivery, and quality.",
  },
];

const steps = [
  { n: "01", label: "Book a free intro" },
  { n: "02", label: "I scope & quote" },
  { n: "03", label: "We ship together" },
];

export function HeroEngage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % outcomes.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, [reduce]);

  const active = outcomes[index];

  return (
    <motion.aside
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: reduce ? 0 : 0.25 }}
      className="relative w-full max-w-md lg:justify-self-end"
      aria-label="Hire me"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_70%_20%,rgba(200,245,66,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-8 -right-2 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent"
      />

      <div className="relative overflow-hidden border border-accent/25 bg-bg/40 p-6 backdrop-blur-md sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(200,245,66,0.04),transparent_40%)]"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              hire_signal
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              open now
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            Looking for a freelance mobile engineer who already ships for real
            users? Start with a free intro call.
          </p>

          <div className="mt-6 min-h-[7.5rem] border-y border-line py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
              what you get
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="mt-3"
              >
                <p className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.65rem]">
                  {active.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {active.detail}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex gap-1.5" aria-hidden>
              {outcomes.map((outcome, i) => (
                <span
                  key={outcome.title}
                  className={`h-0.5 flex-1 transition-colors duration-300 ${
                    i === index ? "bg-accent" : "bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>

          <ol className="mt-6 space-y-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted"
              >
                <span className="text-accent">{step.n}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="text-fg/85 normal-case tracking-normal">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>

          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("cta_book", { location: "hero_engage" })
            }
            className="btn-primary mt-7 flex min-h-12 w-full items-center justify-center bg-accent px-5 py-3.5 text-center font-mono text-sm font-medium text-accent-ink transition hover:brightness-110"
          >
            Book free intro call →
          </a>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={site.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("cta_whatsapp", { location: "hero_engage" })
              }
              className="inline-flex min-h-11 items-center justify-center border border-line-strong px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=Freelance%20mobile%20project`}
              onClick={() =>
                trackEvent("cta_hire", {
                  location: "hero_engage",
                  type: "email",
                })
              }
              className="inline-flex min-h-11 items-center justify-center border border-line-strong px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition hover:border-accent hover:text-accent"
            >
              Email
            </a>
          </div>

          {site.showRates ? (
            <a
              href={site.links.onePager}
              onClick={() =>
                trackEvent("cta_one_pager", { location: "hero_engage" })
              }
              className="mt-4 flex min-h-10 items-center justify-center font-mono text-[11px] text-muted transition hover:text-accent"
            >
              Download rate card (PDF) →
            </a>
          ) : null}

          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-5">
            {(site.showRates
              ? [
                  { k: "intro", v: "free" },
                  { k: "usd mkts", v: "$65–85/h" },
                  { k: "india", v: "₹2.5–3.5k/h" },
                ]
              : [
                  { k: "reply", v: "24–48h" },
                  { k: "apps live", v: "15+" },
                  { k: "markets", v: "global" },
                ]
            ).map((item) => (
              <div key={item.k} className="min-w-0">
                <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                  {item.k}
                </dt>
                <dd className="mt-1 font-mono text-xs font-semibold text-accent sm:text-sm">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.aside>
  );
}

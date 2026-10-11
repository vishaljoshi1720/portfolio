"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const fitPoints = [
  "Own React Native or Flutter end-to-end",
  "Fix crashes, perf, and release pain",
  "Ship payments, wallets, or realtime",
];

const domains = ["Health", "Fintech", "Hospitality", "Delivery", "E‑commerce"];

function SplitBrand({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span>{text}</span>;
  }

  return (
    <span className="inline-flex flex-wrap gap-x-[0.22em]">
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-flex overflow-hidden">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${char}-${ci}`}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.55,
                ease,
                delay: 0.12 + wi * 0.06 + ci * 0.02,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "6%"],
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-bg"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_20%_30%,rgba(200,245,66,0.07),transparent_55%),radial-gradient(ellipse_40%_35%_at_90%_80%,rgba(70,100,55,0.14),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(200,245,66,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,245,66,0.028)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_35%_40%,black,transparent_72%)] sm:block"
      />

      <motion.div
        style={{ y: contentY }}
        className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center gap-10 pb-16 pt-28 sm:gap-12 sm:pb-20 md:pt-32 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-24"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:mb-5 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle shadow-[0_0_10px_var(--accent)]" />
            Available for freelance · Remote US/EU & India
          </motion.p>

          <h1 className="text-[clamp(2.5rem,9vw,6.25rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-fg">
            <SplitBrand text={site.hero.brand} />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: reduce ? 0 : 0.35 }}
            className="mt-5 max-w-xl text-pretty text-lg leading-snug text-fg/90 sm:mt-7 sm:text-xl md:text-[1.55rem]"
          >
            I help startups and agencies ship mobile products users trust —
            and teams can maintain.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease, delay: reduce ? 0 : 0.45 }}
            className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-base"
          >
            Senior React Native & Flutter engineer. 5+ years, 15+ production
            apps across health, fintech, hospitality, and delivery.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease, delay: reduce ? 0 : 0.55 }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={`mailto:${site.email}?subject=Freelance%20mobile%20project`}
              className="btn-primary inline-flex min-h-12 items-center justify-center bg-accent px-6 py-3.5 text-center font-mono text-sm font-medium text-accent-ink transition hover:brightness-110"
            >
              Talk about a project
            </a>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center border border-line-strong px-6 py-3.5 text-center font-mono text-sm text-fg transition hover:border-accent hover:text-accent"
            >
              See selected work
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.7, duration: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:mt-12 sm:gap-x-5 sm:pt-6 sm:text-[11px] sm:tracking-[0.14em]"
          >
            {domains.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <span className="size-1 shrink-0 bg-accent/70" />
                {d}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: reduce ? 0 : 0.3 }}
          className="w-full max-w-md border border-line-strong bg-bg-panel/90 p-5 sm:p-6 md:p-7 lg:justify-self-end"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Good fit if you need
          </p>
          <ul className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
            {fitPoints.map((point, i) => (
              <li key={point} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-snug text-fg/90">{point}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5 sm:mt-7 sm:gap-3 sm:pt-6">
            {site.stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="min-w-0">
                <dt className="truncate font-mono text-[9px] uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold text-accent sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </motion.div>
    </section>
  );
}

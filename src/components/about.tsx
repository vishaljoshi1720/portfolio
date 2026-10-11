"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { Avatar } from "@/components/avatar";
import { Reveal, SectionHeader } from "@/components/reveal";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <li className="group relative overflow-hidden bg-bg-panel px-4 py-6 sm:px-5 sm:py-7">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl md:text-4xl"
      >
        {value}
      </motion.p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:text-[11px]">
        {label}
      </p>
    </li>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-pad border-t border-line bg-bg-soft py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 00 · about"
          title="Senior mobile owner for products that must ship."
          hint="React Native · Flutter · native bridges · payments · release"
        />
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <Avatar size={40} />
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                <p className="text-fg">{site.name}</p>
                <p className="mt-1 text-accent">{site.role}</p>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-fg/90 sm:text-xl md:text-[1.65rem] md:leading-snug">
              {site.about.lead}
            </p>
            <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-muted sm:mt-7">
              {site.about.body}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid grid-cols-2 gap-px border border-line bg-line">
              {site.stats.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 border-b border-line pb-6 sm:mb-12 sm:gap-4 sm:pb-7 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent sm:mb-3 sm:text-xs sm:tracking-[0.22em]"
        >
          {index}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.04 }}
          className="max-w-3xl text-pretty text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.05]"
        >
          {title}
        </motion.h2>
      </div>
      {hint ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xs font-mono text-xs leading-relaxed text-muted"
        >
          {hint}
        </motion.p>
      ) : null}
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.45, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

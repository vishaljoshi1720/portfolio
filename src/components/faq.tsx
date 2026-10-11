"use client";

import { faq } from "@/data/site";
import { Reveal, SectionHeader } from "@/components/reveal";

export function Faq() {
  return (
    <section
      id="faq"
      className="section-pad border-t border-line py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="// 06 · faq"
          title="Questions buyers usually ask."
          hint="Remote · stack · engagement · start date."
        />

        <ul className="border-t border-line">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.02}>
              <li className="border-b border-line">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-medium text-fg marker:content-none sm:py-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] leading-snug sm:text-base">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 font-mono text-sm text-accent transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted sm:pb-6 sm:text-[15px]">
                    {item.a}
                  </p>
                </details>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

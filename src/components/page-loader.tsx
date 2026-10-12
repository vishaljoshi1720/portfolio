"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeExpo = [0.76, 0, 0.24, 1] as const;
const STORAGE_KEY = "vj_boot_v3_kinetic";

const verbs = ["SHIP", "BUILD", "SCALE", "RELEASE", "OWN"];
const stacks = ["RN", "FLUTTER", "PAYMENTS", "STORE", "PERF"];

function SideTicker({
  items,
  reverse,
  reduce,
}: {
  items: string[];
  reverse?: boolean;
  reduce: boolean | null;
}) {
  const loop = [...items, ...items];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 hidden h-full w-12 overflow-hidden opacity-40 md:block md:w-14"
      style={reverse ? { right: "1.25rem" } : { left: "1.25rem" }}
    >
      <motion.div
        className="flex flex-col gap-8 py-8"
        animate={
          reduce
            ? undefined
            : { y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 14, repeat: Infinity, ease: "linear" }
        }
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rotate-180 font-mono text-[10px] uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl]"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function PageLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      setShow(false);
      return;
    }

    document.body.classList.add("boot-lock");

    const hold = reduce ? 260 : 1650;
    const exitMs = reduce ? 180 : 720;
    const t1 = window.setTimeout(() => setPhase("out"), hold);
    const t2 = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setShow(false);
      document.body.classList.remove("boot-lock");
    }, hold + exitMs);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.classList.remove("boot-lock");
    };
  }, [reduce]);

  const first = "VISHAL";
  const last = "JOSHI";

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="intro"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.01 } }}
        >
          <motion.div
            className="absolute inset-0 bg-bg"
            animate={
              phase === "out"
                ? { y: "-105%", transition: { duration: 0.72, ease: easeExpo } }
                : { y: "0%" }
            }
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(200,245,66,0.11),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "var(--noise)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(200,245,66,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,245,66,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />

            <SideTicker items={verbs} reduce={reduce} />
            <SideTicker items={stacks} reverse reduce={reduce} />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={
                  phase === "out" ? { opacity: 0 } : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.4, delay: reduce ? 0 : 0.05 }}
                className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-accent sm:text-[11px]"
              >
                ~/ {site.handle}
              </motion.p>

              <h2 className="text-center">
                <span className="block overflow-hidden">
                  <span className="inline-flex">
                    {first.split("").map((ch, i) => (
                      <motion.span
                        key={`f-${ch}-${i}`}
                        initial={reduce ? false : { y: "120%", rotate: 6 }}
                        animate={
                          phase === "out"
                            ? { y: "-120%", opacity: 0 }
                            : { y: "0%", rotate: 0 }
                        }
                        transition={{
                          duration: 0.55,
                          ease: easeOut,
                          delay: reduce ? 0 : 0.08 + i * 0.04,
                        }}
                        className="inline-block text-[clamp(2.75rem,12vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-fg"
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                </span>
                <span className="mt-1 block overflow-hidden sm:mt-2">
                  <span className="inline-flex">
                    {last.split("").map((ch, i) => (
                      <motion.span
                        key={`l-${ch}-${i}`}
                        initial={reduce ? false : { y: "120%", rotate: -4 }}
                        animate={
                          phase === "out"
                            ? { y: "-120%", opacity: 0 }
                            : { y: "0%", rotate: 0 }
                        }
                        transition={{
                          duration: 0.55,
                          ease: easeOut,
                          delay: reduce ? 0 : 0.32 + i * 0.045,
                        }}
                        className="inline-block text-[clamp(2.75rem,12vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-fg"
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </h2>

              <motion.div
                initial={reduce ? false : { scaleX: 0 }}
                animate={phase === "out" ? { opacity: 0 } : { scaleX: 1 }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : 0.55,
                  ease: easeOut,
                }}
                className="mt-6 h-px w-24 origin-center bg-accent sm:w-32"
              />

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={
                  phase === "out" ? { opacity: 0 } : { opacity: 1, y: 0 }
                }
                transition={{ duration: 0.4, delay: reduce ? 0 : 0.7 }}
                className="mt-5 max-w-sm text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
              >
                Senior mobile · production apps
              </motion.p>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-line-strong/80">
              <motion.div
                className="h-full origin-left bg-accent shadow-[0_0_20px_var(--accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase === "in" ? 1 : 0 }}
                transition={{
                  duration: reduce ? 0.2 : 1.55,
                  ease: easeOut,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

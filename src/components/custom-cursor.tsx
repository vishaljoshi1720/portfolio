"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

function subscribePointer(onChange: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", onChange);
  reduce.addEventListener("change", onChange);
  return () => {
    fine.removeEventListener("change", onChange);
    reduce.removeEventListener("change", onChange);
  };
}

function getPointerSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Subtle craft cursor — desktop only, no labels over content */
export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    () => false,
  );
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.3 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [data-cursor], input, textarea",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          width: hovering ? 28 : 10,
          height: hovering ? 28 : 10,
          x: hovering ? -14 : -5,
          y: hovering ? -14 : -5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="rounded-full border border-white bg-white/10"
      />
    </motion.div>
  );
}

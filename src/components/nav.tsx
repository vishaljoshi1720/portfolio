"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/data/site";
import { Avatar } from "@/components/avatar";

const links = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#stack", label: "stack" },
  { href: "#notes", label: "notes" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 pt-[var(--safe-top)] transition-[background,border,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad flex items-center justify-between gap-3 py-3 sm:py-4 lg:py-5">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2.5 font-mono text-sm tracking-tight text-fg transition-colors hover:text-accent"
        >
          <Avatar size={28} />
          <span className="truncate">
            <span className="text-accent">~/</span>
            {site.handle}
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center font-mono text-xs uppercase tracking-[0.14em] text-accent transition-opacity hover:opacity-80 sm:inline-flex"
          >
            book_intro →
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-line-strong lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span
                className={`h-px w-full bg-fg transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-fg transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-fg transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-pad flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto py-4 pb-[max(1rem,var(--safe-bottom))]">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="min-h-12 border-b border-line py-3 font-mono text-sm uppercase tracking-[0.16em] text-fg"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 min-h-12 bg-accent py-3 text-center font-mono text-sm text-accent-ink"
              >
                hire_me
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

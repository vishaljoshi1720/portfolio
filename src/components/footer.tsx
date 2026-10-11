import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-pad border-t border-line py-8 pb-[max(2rem,var(--safe-bottom))]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-accent">©</span> 2026 {site.name} ·{" "}
          <span className="text-fg/70">{site.handle}</span>
        </p>
        <p className="flex flex-wrap items-center gap-3">
          <span>Next.js · Motion · craft</span>
          <a
            href="#top"
            className="min-h-11 inline-flex items-center text-accent transition hover:opacity-80"
          >
            back_to_top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";

type Tone = "base" | "raised";

/**
 * Single source of section rhythm: every section shares the same container
 * width and vertical padding so the page reads as one grid.
 */
export function Section({
  id,
  tone = "base",
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section-y border-t border-line ${
        tone === "raised" ? "bg-ink-soft/45" : ""
      } ${className}`}
    >
      <div className="section-pad mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

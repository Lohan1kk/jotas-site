"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/components/motion";

/** Editorial section header: index, eyebrow, hairline, title. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  titleId,
  lead,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  lead?: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span className="font-display text-sm text-gold/70 tabular-nums">
          {index}
        </span>
        <span className="text-[0.8125rem] uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </span>
        <motion.span
          className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent"
          initial={reduce ? false : { scaleX: 0 }}
          animate={reduce ? undefined : { scaleX: 1 }}
          transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.15 }}
          style={{ originX: 0 }}
          aria-hidden="true"
        />
      </div>

      <h2
        id={titleId}
        className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.35rem)] leading-[1.08] text-cream"
      >
        {title}
      </h2>

      {lead && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

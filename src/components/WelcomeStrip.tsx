"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

export function WelcomeStrip() {
  const reduce = useReducedMotion();
  const items = [...site.welcomeStrip, ...site.welcomeStrip];
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (half === 0) return;
    const next = x.get() - delta * 0.048;
    x.set(next <= -half ? 0 : next);
  });

  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-soft/80 py-3.5"
      aria-hidden="true"
    >
      <motion.div
        ref={trackRef}
        style={reduce ? undefined : { x }}
        className="flex w-max gap-10 px-6 text-xs uppercase tracking-[0.28em] text-cream/80 sm:text-sm"
      >
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-10"
          >
            <span>{label}</span>
            <span className="text-gold/60" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

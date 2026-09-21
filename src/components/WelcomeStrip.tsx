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
    const next = x.get() - delta * 0.04;
    x.set(next <= -half ? 0 : next);
  });

  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink py-3.5"
      aria-hidden="true"
    >
      <motion.div
        ref={trackRef}
        style={reduce ? undefined : { x }}
        className="marquee-track flex w-max gap-10 px-6 text-[0.7rem] uppercase tracking-[0.32em] text-muted"
      >
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="inline-flex items-center gap-10">
            <span>{label}</span>
            <span className="text-gold/50">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

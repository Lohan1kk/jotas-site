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
    const next = x.get() - delta * 0.035;
    x.set(next <= -half ? 0 : next);
  });

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-5"
      aria-hidden="true"
    >
      <motion.div
        ref={trackRef}
        style={reduce ? undefined : { x }}
        className="marquee-track flex w-max gap-12 px-8 text-[0.72rem] uppercase tracking-[0.36em] text-neutral-400"
      >
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="inline-flex items-center gap-12">
            <span>{label}</span>
            <span className="text-gold/45">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

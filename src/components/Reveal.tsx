"use client";

import { FadeIn } from "@/components/motion";
import type { ReactNode } from "react";

/** Scroll reveal powered by Framer Motion. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeIn className={className} delay={delay / 1000}>
      {children}
    </FadeIn>
  );
}

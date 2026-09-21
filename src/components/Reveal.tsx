"use client";

import type { ReactNode } from "react";

/**
 * Layout wrapper — no scroll-triggered motion.
 * Ambient loops live in CSS / Framer animate props instead.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  if (className) {
    return <div className={className}>{children}</div>;
  }
  return <>{children}</>;
}

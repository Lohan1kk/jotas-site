"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

/** GPU-friendly ease — transform/opacity only */
export const easeOutExpo: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export function MotionDiv({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children?: ReactNode }) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

/** Scroll reveal — opacity + translateY only (GPU). */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`gpu-layer ${className}`}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

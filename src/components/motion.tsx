"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const easeOutExpo: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
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

export function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  /* No scroll reveals — ambient/auto motion only elsewhere */
  if (className) {
    return <div className={className}>{children}</div>;
  }
  return <>{children}</>;
}

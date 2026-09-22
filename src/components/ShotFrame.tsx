"use client";

import { motion, useReducedMotion, type MotionStyle } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/components/motion";

type ShotFrameProps = {
  children: ReactNode;
  className?: string;
  soup?: boolean;
  corners?: boolean;
  animateIn?: boolean;
  style?: MotionStyle;
  glassStyle?: MotionStyle;
};

/**
 * Framer + Google Flow inspired media frame:
 * soft canvas, content-honoring soup edge, viewfinder corners.
 */
export function ShotFrame({
  children,
  className = "",
  soup = true,
  corners = true,
  animateIn = true,
  style,
  glassStyle,
}: ShotFrameProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`flow-shot relative isolate overflow-visible ${className}`}
      style={style}
      initial={
        reduce || !animateIn
          ? false
          : { opacity: 0, scale: 0.965, filter: "blur(8px)" }
      }
      animate={
        reduce || !animateIn
          ? undefined
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 1.15, ease: easeOutExpo }}
    >
      {soup && (
        <div
          className="flow-soup pointer-events-none absolute -inset-[18%] z-0"
          aria-hidden="true"
        />
      )}

      <motion.div
        className="flow-glass relative z-10 h-full w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] md:rounded-[2rem]"
        style={glassStyle}
      >
        {children}

        {corners && (
          <div
            className="pointer-events-none absolute inset-0 z-20"
            aria-hidden="true"
          >
            <span className="flow-corner absolute left-3 top-3 sm:left-4 sm:top-4" />
            <span className="flow-corner flow-corner-tr absolute right-3 top-3 sm:right-4 sm:top-4" />
            <span className="flow-corner flow-corner-bl absolute bottom-3 left-3 sm:bottom-4 sm:left-4" />
            <span className="flow-corner flow-corner-br absolute bottom-3 right-3 sm:bottom-4 sm:right-4" />
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-cream/[0.14]"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}

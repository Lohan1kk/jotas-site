"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

export function StickyWhatsApp() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-gold/40 bg-ink/95 px-4 py-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold backdrop-blur-md md:bottom-8 md:right-8 gpu-layer"
      aria-label="Abrir WhatsApp do Jota's"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={
        reduce
          ? undefined
          : { y: -2, backgroundColor: "rgba(212,175,55,1)", color: "#0a0a0a" }
      }
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <span aria-hidden="true">✦</span>
      WhatsApp
    </motion.a>
  );
}

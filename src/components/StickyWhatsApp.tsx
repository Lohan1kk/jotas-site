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
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-gold/45 bg-ink/92 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold backdrop-blur-md md:bottom-8 md:right-8"
      aria-label="Abrir WhatsApp do Jota's"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      whileHover={reduce ? undefined : { y: -2, backgroundColor: "rgba(212,160,23,1)", color: "#0c0b0a" }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ✦
      </span>
      WhatsApp
    </motion.a>
  );
}

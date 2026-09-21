"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn, easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

export function Reservations() {
  const reduce = useReducedMotion();

  return (
    <section
      id="reservas"
      className="section-pad section-y border-t border-line bg-ink-soft"
      aria-labelledby="reservas-heading"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
          Reservas
        </p>
        <h2
          id="reservas-heading"
          className="mt-4 font-display text-4xl leading-tight text-cream md:text-5xl"
        >
          Reserve sua mesa
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
          Fale conosco pelo WhatsApp — {site.phoneDisplay}. Horário:{" "}
          {site.hours.label}.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href={site.whatsappReserve}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            Agendar pelo WhatsApp
          </motion.a>
          <motion.a
            href={`tel:${site.phoneTel}`}
            className="btn-ghost"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Ligar
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
}

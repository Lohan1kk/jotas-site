"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn, easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

export function Reservations() {
  const reduce = useReducedMotion();
  const c = site.copy;

  return (
    <section
      id="reservas"
      className="section-pad section-y border-t border-white/10 bg-[#0d0d0d]"
      aria-labelledby="reservas-heading"
    >
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-[0.68rem] uppercase tracking-[0.38em] text-gold">
          {c.reserveEyebrow}
        </p>
        <h2
          id="reservas-heading"
          className="mt-4 font-display text-4xl leading-tight tracking-wide text-neutral-100 md:text-5xl"
        >
          {c.reserveTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-base">
          {c.reserveBody} {site.phoneDisplay}. {site.hours.label}.
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
            Reservar pelo WhatsApp
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

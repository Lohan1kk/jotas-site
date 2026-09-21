"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-[#12100e] pt-16 md:pt-20"
      aria-label="Apresentação"
    >
      {/* Full-bleed atmosphere — ambient loops, not scroll-driven */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-keyart absolute -inset-[14%]">
          <Image
            src="/brand/keyart.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_30%]"
          />
        </div>
        <div className="hero-aurora absolute inset-0" />
        <div className="hero-aurora-slow absolute inset-0" />
        {/* Centre plate — slightly open so keyart breathes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_52%_68%_at_50%_48%,rgba(18,16,14,0.92)_0%,rgba(18,16,14,0.78)_42%,rgba(18,16,14,0.4)_72%,transparent_88%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#12100e] to-transparent" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-14 text-center md:py-20">
        <motion.p
          className="text-[0.8125rem] font-medium uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.div
          className="relative mt-5 md:mt-7"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.08, ease: easeOutExpo }}
        >
          <div
            className="hero-halo pointer-events-none absolute left-1/2 top-1/2 h-[min(52vw,22rem)] w-[min(92vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(219,171,42,0.28),transparent_68%)] blur-2xl"
            aria-hidden="true"
          />
          <h1 className="relative font-display text-[clamp(4.25rem,16vw,9.5rem)] font-semibold leading-[0.88] tracking-[0.04em] text-cream">
            {site.shortName}
          </h1>
          <div className="relative mx-auto mt-4 flex max-w-md items-center gap-4 md:mt-5">
            <span
              className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70"
              aria-hidden="true"
            />
            <span
              className="hero-gold-dot h-1.5 w-1.5 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span
              className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70"
              aria-hidden="true"
            />
          </div>
          <p className="relative mt-4 text-[0.8125rem] font-medium uppercase tracking-[0.38em] text-cream md:text-sm md:tracking-[0.46em]">
            Bar e Restaurante
          </p>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl font-display text-[clamp(1.55rem,3.6vw,2.55rem)] leading-[1.15] text-cream md:mt-10"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: easeOutExpo }}
        >
          Boteco da Liberdade,{" "}
          <span className="text-gold-soft">{site.tagline.toLowerCase()}</span>
        </motion.p>

        <motion.p
          className="mt-5 max-w-lg text-base leading-relaxed text-cream/90 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: easeOutExpo }}
        >
          Pratos do dia, lanches artesanais e porções para a mesa cheia — no
          coração da Liberdade, SP.
        </motion.p>

        <motion.div
          className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.52, ease: easeOutExpo }}
        >
          <motion.a
            href="#cardapio"
            className="btn-primary"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Ver cardápio
          </motion.a>
          <motion.a
            href={site.whatsappReserve}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Reservar mesa
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

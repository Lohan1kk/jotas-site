"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero elegante e preenchido: marca, tagline, divisor e CTAs —
 * sem formulário/barra de reserva.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className={`absolute inset-0 ${reduce ? "" : "hero-ken"} gpu-layer`}>
          <MediaImage
            src="/brand/fachada-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-[center_28%] scale-105"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        {/* Soft vignette — keeps type readable without crushing the photo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_65%_at_50%_55%,rgba(8,8,8,0.35)_0%,rgba(8,8,8,0.72)_70%,#080808_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808]/90 to-transparent" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="max-w-3xl">
          <motion.p
            className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easeOutExpo }}
          >
            Liberdade · São Paulo
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-[clamp(4rem,13vw,7.75rem)] font-semibold uppercase leading-[0.88] tracking-[0.05em] text-neutral-100"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.06, ease: easeOutExpo }}
          >
            {site.shortName}
          </motion.h1>

          <motion.div
            className="mt-6 flex max-w-sm items-center gap-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-gold/80 to-transparent" />
            <span className="h-1 w-1 rounded-full bg-gold" />
          </motion.div>

          <motion.p
            className="mt-6 font-display text-[clamp(1.35rem,2.8vw,2rem)] leading-snug text-neutral-100/95"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
          >
            Bar e Restaurante
            <span className="mt-1 block text-gold-soft">{site.tagline}</span>
          </motion.p>

          <motion.p
            className="mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-[0.95rem]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: easeOutExpo }}
          >
            Pratos do dia, lanches artesanais e porções — no coração da
            Liberdade.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36, ease: easeOutExpo }}
          >
            <motion.a
              href={site.whatsappReserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Reservar mesa
            </motion.a>
            <motion.a
              href="#cardapio"
              className="btn-ghost"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Ver cardápio
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

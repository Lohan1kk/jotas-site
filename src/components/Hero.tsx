"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero full-bleed: vídeo de fundo object-cover, overlay escuro,
 * marca + headline + CTA legíveis — dark luxury gastronômico.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      {/* Background media — full bleed, foco no letreiro */}
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/jotas-sign-hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_15%] sm:object-[center_18%]"
        />
      ) : (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_15%] sm:object-[center_18%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/brand/jotas-sign-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/brand/jotas-sign-hero.webm" type="video/webm" />
          <source src="/brand/jotas-sign-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay — vídeo visível no topo, texto legível embaixo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(8, 8, 8, 0.35) 0%,
              rgba(8, 8, 8, 0.2) 32%,
              rgba(8, 8, 8, 0.55) 58%,
              rgba(8, 8, 8, 0.88) 78%,
              rgba(8, 8, 8, 0.96) 100%
            )
          `,
        }}
      />

      <div className="section-pad relative z-10 flex min-h-dvh w-full flex-col justify-end pb-16 pt-28 md:pb-20 md:pt-32">
        <motion.div
          className="mx-auto flex w-full max-w-2xl flex-col items-center text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <motion.p
            className="text-[0.65rem] font-medium uppercase tracking-[0.42em] text-neutral-300"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
          >
            Liberdade · São Paulo
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] tracking-[0.08em] text-[#f5f5f5] drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: easeOutExpo }}
          >
            {site.shortName}
          </motion.h1>

          <motion.p
            className="mt-3 text-[0.7rem] uppercase tracking-[0.36em] text-neutral-300 md:text-[0.75rem]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeOutExpo }}
          >
            Bar e Restaurante
          </motion.p>

          <motion.p
            className="mt-5 max-w-md font-display text-xl text-gold/95 md:text-2xl"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOutExpo }}
          >
            {site.tagline}
          </motion.p>

          <motion.a
            href="#cardapio"
            className="btn-primary mt-8 min-h-11"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: easeOutExpo }}
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Ver cardápio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

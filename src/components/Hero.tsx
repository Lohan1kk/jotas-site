"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero cinematico: fachada 4K full-bleed + degrade suave
 * da foto para o charcoal — texto legivel sem corte seco.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className={`absolute inset-0 ${reduce ? "" : "hero-ken"} gpu-layer`}
        >
          <MediaImage
            src="/brand/fachada-hero-4k.jpg"
            alt="Fachada do Jota's Bar e Restaurante — Av. da Liberdade, 9"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[center_28%]"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Soft cinematic wash — photo dissolves into ink */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/55 via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] from-[12%] via-[#080808]/40 via-[42%] to-transparent to-[72%]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-end pb-16 pt-36 text-center md:pb-24 md:pt-44">
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(3.75rem,12vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[0.06em] text-[#f5f5f5]"
          style={{ textShadow: "0 4px 40px rgba(0,0,0,0.65)" }}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.06, ease: easeOutExpo }}
        >
          {site.shortName}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md font-display text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug text-[#f0f0f0]"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: easeOutExpo }}
        >
          Bar e Restaurante
          <span className="mt-1.5 block text-gold">{site.tagline}</span>
        </motion.p>

        <motion.div
          className="mt-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: easeOutExpo }}
        >
          <motion.a
            href="#cardapio"
            className="btn-primary"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Ver cardápio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

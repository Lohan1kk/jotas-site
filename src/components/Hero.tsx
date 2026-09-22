"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero: fachada no terço superior; brand no prato charcoal sólido.
 * Texto não compete com o letreiro físico.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      {/* Facade band — top only */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[48%] md:h-[52%]"
        aria-hidden="true"
      >
        <div
          className={`absolute inset-0 ${reduce ? "" : "hero-ken"} gpu-layer`}
        >
          <MediaImage
            src="/brand/fachada.png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-top"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080808]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* Solid ink plate for copy */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[#080808] md:h-[55%]"
        aria-hidden="true"
      />

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-end pb-16 pt-[48vh] text-center md:pb-24 md:pt-[50vh]">
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.h1
          className="mt-4 font-display text-[clamp(3.5rem,11vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-[0.06em] text-[#f5f5f5]"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: easeOutExpo }}
        >
          {site.shortName}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-md font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-snug text-[#e8e8e8]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: easeOutExpo }}
        >
          Bar e Restaurante
          <span className="mt-1 block text-gold">{site.tagline}</span>
        </motion.p>

        <motion.div
          className="mt-9"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26, ease: easeOutExpo }}
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

      <span className="sr-only">
        Fachada do Jota&apos;s Bar e Restaurante — Av. da Liberdade, 9
      </span>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/** Hero centrado no terço inferior — fundo escuro legível. */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#080808]"
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
            className="object-cover object-[center_22%] scale-105"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        {/* Dark luxury wash — same ink as the rest of the site */}
        <div className="absolute inset-0 bg-[#080808]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/40" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#080808] via-[#080808]/95 to-transparent" />
      </div>

      {/* Content anchored low + centered */}
      <div className="section-pad relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-end pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(4.25rem,14vw,8rem)] font-semibold uppercase leading-[0.88] tracking-[0.06em] text-neutral-100 drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)]"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: easeOutExpo }}
        >
          {site.shortName}
        </motion.h1>

        <motion.div
          className="mx-auto mt-6 flex w-full max-w-xs items-center gap-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
        </motion.div>

        <motion.p
          className="mt-6 font-display text-[clamp(1.25rem,2.6vw,1.85rem)] leading-snug text-neutral-100"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
        >
          Bar e Restaurante
          <span className="mt-1 block text-gold-soft">{site.tagline}</span>
        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-[0.95rem]"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: easeOutExpo }}
        >
          Pratos do dia, lanches artesanais e porções — no coração da Liberdade.
        </motion.p>

        <motion.div
          className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease: easeOutExpo }}
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
    </section>
  );
}

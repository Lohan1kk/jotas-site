"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden bg-ink pt-20 md:justify-center"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className={`absolute inset-0 ${reduce ? "" : "hero-ken"} gpu-layer`}
        >
          <MediaImage
            src="/brand/fachada-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-[center_30%]"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-6xl pb-16 pt-28 md:pb-24 md:pt-32">
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.45em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,12vw,7.5rem)] font-semibold leading-[0.9] tracking-[0.06em] text-cream uppercase"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: easeOutExpo }}
        >
          {site.shortName}
        </motion.h1>

        <motion.p
          className="mt-4 font-display text-[clamp(1.35rem,3vw,2rem)] italic leading-snug text-cream/90"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
        >
          Bar e Restaurante —{" "}
          <span className="text-gold-soft not-italic">{site.tagline}</span>
        </motion.p>

        <motion.p
          className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: easeOutExpo }}
        >
          Pratos do dia, lanches artesanais e porções para a mesa cheia — no
          coração da Liberdade.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: easeOutExpo }}
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

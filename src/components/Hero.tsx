"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/** Immersive full-screen hero — centered editorial. */
export function Hero() {
  const reduce = useReducedMotion();
  const c = site.copy;

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#080808] pt-20"
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
            className="object-cover object-[center_28%]"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center py-24 text-center md:py-28">
        <motion.span
          className="inline-flex items-center border border-gold/40 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          {c.heroEyebrow}
        </motion.span>

        <motion.h1
          className="mt-7 font-display text-[clamp(3.75rem,14vw,8rem)] font-semibold uppercase leading-[0.88] tracking-[0.08em] text-neutral-100"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOutExpo }}
        >
          {c.heroTitle}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl font-display text-[clamp(1.25rem,2.8vw,1.85rem)] italic leading-snug text-neutral-100/90"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: easeOutExpo }}
        >
          {c.heroLead}
          <span className="mt-1 block text-gold-soft not-italic">
            {site.tagline}
          </span>
        </motion.p>

        <motion.p
          className="mt-5 max-w-md text-sm font-light leading-relaxed text-neutral-400 md:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: easeOutExpo }}
        >
          {c.heroBody}
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: easeOutExpo }}
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
            {c.heroCtaPrimary}
          </motion.a>
          <motion.a
            href="#cardapio"
            className="btn-ghost"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {c.heroCtaSecondary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

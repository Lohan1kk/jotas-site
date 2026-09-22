"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero HQ — UI/UX Pro Max: Hero-Centric + hospitality gold (#D4AF37).
 * Framer Motion: stagger hierárquico (opacity/y only) + reduced-motion.
 * Full-bleed fachada 4K → degrade suave para charcoal (sem interior).
 */
const copyContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const copyItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className={`absolute inset-0 gpu-layer ${reduce ? "" : "hero-ken"}`}
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.35, ease: easeOutExpo }}
        >
          <MediaImage
            src="/brand/fachada-hero-4k.jpg"
            alt="Fachada do Jota's Bar e Restaurante — Av. da Liberdade, 9"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[center_32%] md:object-[center_28%]"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </motion.div>

        {/* Extra soft wash on top of baked gradient in the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #080808 0%, rgba(8,8,8,0.55) 22%, transparent 48%)",
          }}
        />
      </div>

      <motion.div
        className="section-pad relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-end pb-16 pt-36 text-center md:pb-24 md:pt-44"
        variants={reduce ? undefined : copyContainer}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <motion.p
          className="text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold"
          variants={reduce ? undefined : copyItem}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(3.75rem,12vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[0.06em] text-[#f5f5f5]"
          style={{ textShadow: "0 4px 48px rgba(0,0,0,0.7)" }}
          variants={reduce ? undefined : copyItem}
        >
          {site.shortName}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md font-display text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug text-[#f0f0f0]"
          style={{ textShadow: "0 2px 28px rgba(0,0,0,0.6)" }}
          variants={reduce ? undefined : copyItem}
        >
          Bar e Restaurante
          <span className="mt-1.5 block text-gold">{site.tagline}</span>
        </motion.p>

        <motion.div className="mt-10" variants={reduce ? undefined : copyItem}>
          <motion.a
            href="#cardapio"
            className="btn-primary min-h-11 min-w-[11rem]"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.28, ease: easeOutExpo }}
          >
            Ver cardápio
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

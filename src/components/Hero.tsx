"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MediaImage } from "@/components/MediaImage";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/** Hero limpo — marca + uma linha; reserva fica na ReservationBar. */
export function Hero() {
  const reduce = useReducedMotion();
  const c = site.copy;

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[88dvh] flex-col justify-end overflow-hidden bg-[#080808] pt-20 md:min-h-dvh md:justify-center"
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
            className="object-cover object-[center_30%]"
            frameClassName="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-black/40" />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-6xl pb-20 pt-28 md:pb-28 md:pt-32">
        <motion.p
          className="text-[0.68rem] uppercase tracking-[0.38em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          {c.heroEyebrow}
        </motion.p>

        <motion.h1
          className="mt-4 max-w-3xl font-display text-[clamp(3.25rem,11vw,6.5rem)] font-semibold uppercase leading-[0.9] tracking-[0.06em] text-neutral-100"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: easeOutExpo }}
        >
          {c.heroTitle}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-md font-display text-xl text-neutral-100/90 md:text-2xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: easeOutExpo }}
        >
          {site.tagline}
        </motion.p>
      </div>
    </section>
  );
}

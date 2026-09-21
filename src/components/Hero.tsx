"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { easeOutExpo, fadeUp, stagger } from "@/components/motion";
import { site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "14%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1.06, 1.16],
  );
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    reduce ? [1, 1] : [1, 0.35],
  );

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative flex min-h-dvh items-end overflow-hidden"
      aria-label="Apresentação"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/brand/fachada-hero.jpg"
          alt="Fachada e salão do Jota's Bar e Restaurante na Liberdade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.35)_0%,rgba(12,11,10,0.15)_28%,rgba(12,11,10,0.55)_62%,rgba(12,11,10,0.92)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_20%_85%,rgba(12,11,10,0.55),transparent_60%)]"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: copyOpacity }}
        className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-16 pt-32 sm:pb-20 md:pb-28 md:pt-40"
      >
        <motion.div
          className="max-w-3xl"
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="font-display text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] tracking-[0.04em] text-cream"
          >
            {site.shortName}
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="mt-6 max-w-xl font-display text-[clamp(1.65rem,3.6vw,2.75rem)] leading-[1.15] text-cream/92"
          >
            Boteco da Liberdade,{" "}
            <span className="text-gold-soft">
              {site.tagline.toLowerCase()}
            </span>
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-cream/70 md:text-lg"
          >
            Pratos do dia, lanches artesanais e porções para a mesa cheia — no
            coração da Liberdade, SP.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#cardapio"
              className="btn-primary"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.2 }}
            >
              Reservar mesa
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: easeOutExpo }}
      >
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-gold/80 to-transparent"
          animate={reduce ? undefined : { scaleY: [1, 0.55, 1], opacity: [0.9, 0.35, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}

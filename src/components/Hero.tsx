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
import { ShotFrame } from "@/components/ShotFrame";
import { site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const frameInset = useTransform(
    scrollYProgress,
    [0, 0.55],
    reduce
      ? ["0.75rem", "0.75rem"]
      : ["clamp(0.75rem, 2.2vw, 1.75rem)", "0.2rem"],
  );
  const frameRadius = useTransform(
    scrollYProgress,
    [0, 0.55],
    reduce ? [28, 28] : [28, 14],
  );
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1.04, 1.04] : [1.04, 1.12],
  );
  const copyY = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduce ? [0, 0] : [0, 36],
  );
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduce ? [1, 1] : [1, 0.25],
  );

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative min-h-[115dvh] overflow-hidden bg-ink"
      aria-label="Apresentação"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(92,63,40,0.22),transparent_70%),radial-gradient(ellipse_50%_40%_at_80%_10%,rgba(212,160,23,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <motion.div
        className="sticky top-0 z-10 h-dvh"
        style={{ padding: frameInset }}
      >
        <ShotFrame
          className="h-full w-full"
          soup
          corners
          animateIn
          glassStyle={{ borderRadius: frameRadius }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
            <motion.div className="absolute inset-0" style={{ scale: mediaScale }}>
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
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.42)_0%,rgba(12,11,10,0.06)_30%,rgba(12,11,10,0.32)_58%,rgba(12,11,10,0.9)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_18%_88%,rgba(12,11,10,0.55),transparent_60%)]"
              aria-hidden="true"
            />
          </div>

          <motion.div
            style={{ y: copyY, opacity: copyOpacity }}
            className="absolute inset-x-0 bottom-0 z-30 px-5 pb-8 pt-24 sm:px-8 sm:pb-10 md:px-12 md:pb-14 lg:px-16"
          >
            <motion.div
              className="max-w-3xl"
              variants={reduce ? undefined : stagger}
              initial={reduce ? false : "hidden"}
              animate="show"
            >
              <motion.p
                variants={reduce ? undefined : fadeUp}
                className="font-display text-[clamp(3.25rem,11vw,7.75rem)] leading-[0.88] tracking-[0.04em] text-cream"
              >
                {site.shortName}
              </motion.p>

              <motion.h1
                variants={reduce ? undefined : fadeUp}
                className="mt-5 max-w-xl font-display text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.15] text-cream/92"
              >
                Boteco da Liberdade,{" "}
                <span className="text-gold-soft">
                  {site.tagline.toLowerCase()}
                </span>
              </motion.h1>

              <motion.p
                variants={reduce ? undefined : fadeUp}
                className="mt-4 max-w-md text-base leading-relaxed text-cream/70 md:text-lg"
              >
                Pratos do dia, lanches artesanais e porções para a mesa cheia —
                no coração da Liberdade, SP.
              </motion.p>

              <motion.div
                variants={reduce ? undefined : fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <motion.a
                  href="#cardapio"
                  className="btn-primary"
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
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
                >
                  Reservar mesa
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </ShotFrame>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-20 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8, ease: easeOutExpo }}
      >
        <motion.span
          className="block h-9 w-px bg-gradient-to-b from-gold/70 to-transparent"
          animate={
            reduce
              ? undefined
              : { scaleY: [1, 0.5, 1], opacity: [0.85, 0.3, 0.85] }
          }
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}

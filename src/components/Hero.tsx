"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

/**
 * Hero Claude-style: fundo escuro, letreiro animado centrado,
 * tipografia mínima — a marca vive na imagem.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#080808]"
      aria-label="Apresentação"
    >
      {/* Soft gold ambient — echoes the sign halo */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(212,175,55,0.09), transparent 70%)",
        }}
      />

      <motion.div
        className="section-pad relative z-10 flex w-full max-w-lg flex-col items-center text-center"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
      >
        <motion.div
          className="relative w-full max-w-[min(100%,22rem)] sm:max-w-[24rem]"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: easeOutExpo }}
        >
          {reduce ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/brand/jotas-sign-hero-poster.jpg"
              alt="Letreiro Jota's Bar e Restaurante com halo dourado"
              width={406}
              height={722}
              className="mx-auto h-auto w-full select-none"
              draggable={false}
            />
          ) : (
            <video
              className="mx-auto h-auto w-full select-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/brand/jotas-sign-hero-poster.jpg"
              aria-label="Letreiro Jota's Bar e Restaurante com halo dourado"
            >
              <source src="/brand/jotas-sign-hero.webm" type="video/webm" />
              <source src="/brand/jotas-sign-hero.mp4" type="video/mp4" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/jotas-sign-hero.gif"
                alt="Letreiro Jota's Bar e Restaurante com halo dourado"
                width={270}
                height={480}
                className="mx-auto h-auto w-full"
              />
            </video>
          )}
        </motion.div>

        <motion.p
          className="mt-10 text-[0.65rem] font-medium uppercase tracking-[0.42em] text-neutral-400"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.p
          className="mt-3 font-display text-lg text-gold/90 md:text-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: easeOutExpo }}
        >
          {site.tagline}
        </motion.p>

        <motion.a
          href="#cardapio"
          className="btn-primary mt-8 min-h-11"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: easeOutExpo }}
          whileHover={reduce ? undefined : { y: -2 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          Ver cardápio
        </motion.a>
      </motion.div>

      {/* Screen-reader brand (visible brand is the sign) */}
      <h1 className="sr-only">
        {site.shortName} — Bar e Restaurante · {site.tagline}
      </h1>
    </section>
  );
}

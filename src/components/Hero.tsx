"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

const meta = [
  { label: "Endereço", value: "Av. da Liberdade, 9 — SP" },
  { label: "Horário", value: "Todos os dias · 6h–23h" },
  { label: "Faixa", value: site.priceRange },
  { label: "Google", value: `${site.reviewsCount} avaliações` },
];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 90],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    reduce ? [1, 1] : [1, 0],
  );
  const auroraY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-22%"],
  );

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden bg-[#080706]"
      aria-label="Apresentação"
    >
      {/* Ambient key art — blurred so it reads as light, not photo */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: auroraY }}
        aria-hidden="true"
      >
        <div className="hero-keyart absolute -inset-[12%]">
          <Image
            src="/brand/keyart.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_20%]"
          />
        </div>
        <div className="hero-aurora absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_25%_80%,rgba(8,7,6,0.92),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080706] via-[#080706]/85 to-transparent" />
        <div className="grain absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-14 pt-32 md:pb-20 md:pt-40"
      >
        {/* Generated brand lockup — screen blend drops the black plate */}
        <motion.div
          className="relative w-full max-w-[min(92vw,44rem)]"
          initial={
            reduce ? false : { opacity: 0, scale: 0.94, filter: "blur(14px)" }
          }
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: easeOutExpo }}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/brand/wordmark.jpg"
              alt={`${site.name} — marca`}
              fill
              priority
              sizes="(max-width: 768px) 92vw, 44rem"
              className="hero-wordmark object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-2 max-w-2xl md:mt-4"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
        >
          <h1 className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.14] text-cream">
            Boteco da Liberdade,{" "}
            <span className="text-gold-soft">
              {site.tagline.toLowerCase()}
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
            Pratos do dia, lanches artesanais e porções para a mesa cheia — no
            coração da Liberdade, SP.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: easeOutExpo }}
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

        <motion.dl
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 md:mt-16 md:grid-cols-4"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: easeOutExpo }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/80">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-cream/80">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}

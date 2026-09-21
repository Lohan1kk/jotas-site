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
    reduce ? [0, 0] : [0, 80],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduce ? [1, 1] : [1, 0],
  );
  const auroraY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-18%"],
  );

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-[#080706]"
      aria-label="Apresentação"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ y: auroraY }}
        aria-hidden="true"
      >
        <div className="hero-keyart absolute -inset-[15%]">
          <Image
            src="/brand/keyart.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_35%]"
          />
        </div>
        <div className="hero-aurora absolute inset-0" />
        {/* Keeps the nav band and copy plate dark enough for cream text */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080706] via-[#080706]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#080706] via-[#080706]/88 to-transparent" />
        <div className="grain absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-12 pt-28 md:pb-16 md:pt-32"
      >
        {/* Generated lockup; screen blend + soft mask so no plate edge shows */}
        <motion.div
          className="relative -ml-[4%] w-[min(104%,46rem)]"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: easeOutExpo }}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/brand/wordmark.jpg"
              alt={`${site.name}`}
              fill
              priority
              sizes="(max-width: 768px) 104vw, 46rem"
              className="hero-wordmark object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="-mt-4 max-w-2xl md:-mt-8"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: easeOutExpo }}
        >
          <h1 className="font-display text-[clamp(1.55rem,3.4vw,2.6rem)] leading-[1.14] text-cream">
            Boteco da Liberdade,{" "}
            <span className="text-gold-soft">
              {site.tagline.toLowerCase()}
            </span>
          </h1>
          <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-cream/75 md:text-lg">
            Pratos do dia, lanches artesanais e porções para a mesa cheia — no
            coração da Liberdade, SP.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: easeOutExpo }}
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
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 md:mt-14 md:grid-cols-4"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.92, ease: easeOutExpo }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[0.7rem] uppercase tracking-[0.24em] text-gold">
                {item.label}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug text-cream/85">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}

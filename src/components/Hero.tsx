"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

const meta = [
  { label: "Endereço", value: "Av. da Liberdade, 9" },
  { label: "Horário", value: "Todos os dias · 6h–23h" },
  { label: "Faixa", value: site.priceRange },
  { label: "Google", value: `${site.reviewsCount} avaliações` },
];

const flank = [
  {
    src: "/brand/fachada-hero.jpg",
    className: "left-0 origin-left",
    position: "object-[70%_center]",
  },
  {
    src: "/brand/jogo-americano.png",
    className: "right-0 origin-right",
    position: "object-[30%_center]",
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative isolate flex min-h-dvh items-center overflow-hidden bg-[#080706] pt-16 md:pt-20"
      aria-label="Apresentação"
    >
      {/* Atmosphere only — the centre column stays clear for type */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_70%_at_50%_50%,rgba(8,7,6,0.94),rgba(8,7,6,0.6)_60%,transparent_82%)]" />
        <div className="grain absolute inset-0" />
      </div>

      {/* Flanking atmosphere images, cropped into the outer thirds */}
      {flank.map((item, i) => (
        <motion.div
          key={item.src}
          className={`pointer-events-none absolute inset-y-16 -z-10 hidden w-[24%] max-w-[22rem] overflow-hidden lg:block ${item.className}`}
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.12, ease: easeOutExpo }}
        >
          <div className="relative h-full w-full">
            <Image
              src={item.src}
              alt=""
              fill
              sizes="24vw"
              className={`object-cover ${item.position} opacity-30 grayscale-[35%]`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.55),rgba(8,7,6,0.9))]" />
          </div>
        </motion.div>
      ))}

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center py-16 text-center">
        <motion.p
          className="text-[0.75rem] uppercase tracking-[0.42em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          Liberdade · São Paulo
        </motion.p>

        <motion.div
          className="relative mt-6 w-[min(100%,42rem)]"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: easeOutExpo }}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/brand/wordmark.jpg"
              alt={site.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42rem"
              className="hero-wordmark object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          className="-mt-6 max-w-2xl font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-cream md:-mt-10"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
        >
          Boteco da Liberdade,{" "}
          <span className="text-gold-soft">{site.tagline.toLowerCase()}</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.64, ease: easeOutExpo }}
        >
          Pratos do dia, lanches artesanais e porções para a mesa cheia — no
          coração da Liberdade, SP.
        </motion.p>

        <motion.div
          className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.78, ease: easeOutExpo }}
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
          className="mt-14 grid w-full grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 text-left md:grid-cols-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.92, ease: easeOutExpo }}
        >
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[0.75rem] uppercase tracking-[0.2em] text-gold">
                {item.label}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug text-cream">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

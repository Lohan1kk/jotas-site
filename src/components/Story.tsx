"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ShotFrame } from "@/components/ShotFrame";
import { site } from "@/lib/content";

export function Story() {
  const reduce = useReducedMotion();

  return (
    <section
      id="historia"
      className="section-pad relative py-24 md:py-36"
      aria-labelledby="historia-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            index="01"
            eyebrow="A casa"
            titleId="historia-heading"
            title="Madeira, bar cheio e mesa para os amigos"
            lead="O Jota's é boteco paulista moderno: acolhedor, social e com comida de verdade. Mezanino, balcão iluminado e o ritmo da Liberdade logo na porta."
          />

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/80">
                Faixa
              </dt>
              <dd className="mt-2 text-sm text-cream/80">{site.priceRange}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-gold/80">
                Avaliações
              </dt>
              <dd className="mt-2 text-sm text-cream/80">
                {site.reviewsCount} no Google
              </dd>
            </div>
          </dl>

          <motion.a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-9"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            {site.instagramHandle}
          </motion.a>
        </Reveal>

        <Reveal className="relative lg:col-span-7" delay={120}>
          <ShotFrame className="w-full" animateIn={false}>
            <div className="relative aspect-[4/5] sm:aspect-[16/11]">
              <Image
                src="/brand/fachada-hero.jpg"
                alt="Fachada e salão do Jota's Bar e Restaurante na Liberdade"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[center_45%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </ShotFrame>

          <motion.div
            className="relative z-20 -mt-14 ml-auto w-[46%] max-w-[15rem] sm:-mt-20 sm:w-[38%] md:max-w-[17rem]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <ShotFrame className="w-full" soup={false} animateIn={false}>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/brand/jogo-americano.png"
                  alt="Jogo americano do Jota's com identidade da casa"
                  fill
                  sizes="20rem"
                  className="object-cover object-center"
                />
              </div>
            </ShotFrame>
          </motion.div>

          <p className="mt-6 max-w-sm font-display text-2xl text-gold-soft md:text-3xl">
            “{site.tagline}”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

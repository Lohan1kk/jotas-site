"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ShotFrame } from "@/components/ShotFrame";
import { site } from "@/lib/content";

const facts = [
  { label: "Faixa", value: site.priceRange },
  { label: "Avaliações", value: `${site.reviewsCount} no Google` },
  { label: "Horário", value: site.hours.short },
  { label: "Endereço", value: "Av. da Liberdade, 9" },
];

export function Story() {
  const reduce = useReducedMotion();

  return (
    <Section id="historia" labelledBy="historia-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="A casa"
            titleId="historia-heading"
            title="Madeira, bar cheio e mesa para os amigos"
            lead="O Jota's é boteco paulista moderno: acolhedor, social e com comida de verdade. Mezanino, balcão iluminado e o ritmo da Liberdade logo na porta."
          />

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[0.9375rem] text-cream">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <motion.a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-10"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            {site.instagramHandle}
          </motion.a>
        </Reveal>

        <Reveal delay={120}>
          <ShotFrame className="w-full" animateIn={false}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/brand/fachada-hero.jpg"
                alt="Fachada e salão do Jota's Bar e Restaurante na Liberdade"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </ShotFrame>

          <p className="mt-6 font-display text-2xl text-gold-soft md:text-3xl">
            “{site.tagline}”
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

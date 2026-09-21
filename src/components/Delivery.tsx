"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export function Delivery() {
  const reduce = useReducedMotion();

  return (
    <Section id="delivery" labelledBy="delivery-heading">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            index="03"
            eyebrow="Delivery"
            titleId="delivery-heading"
            title="Pedido no WhatsApp"
            lead={`Mesmo número do salão: ${site.phoneDisplay}. Reserva e pedido no mesmo canal.`}
          />

          <div className="panel flex flex-col justify-between p-6 md:p-8">
            <div>
            <p className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">
              Pagamentos
            </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-cream/90">
                {site.payments.join(" · ")}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href={site.whatsappDelivery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Pedir delivery
              </motion.a>
              <motion.a
                href={`tel:${site.phoneTel}`}
                className="btn-ghost"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Ligar agora
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

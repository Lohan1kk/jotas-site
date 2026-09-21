"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export function Delivery() {
  const reduce = useReducedMotion();

  return (
    <section
      id="delivery"
      className="section-pad border-t border-line py-20 md:py-28"
      aria-labelledby="delivery-heading"
    >
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-line bg-[linear-gradient(135deg,var(--ink-soft)_0%,var(--ink)_48%,rgba(30,58,47,0.35)_100%)] px-6 py-14 md:px-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Delivery
          </p>
          <h2
            id="delivery-heading"
            className="mt-4 max-w-xl font-display text-4xl leading-[1.1] text-cream md:text-5xl"
          >
            Pedido no WhatsApp
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
            Mesmo número do salão: {site.phoneDisplay}. Aceitamos{" "}
            {site.payments.slice(0, 5).join(", ")} e mais — confira no flyer.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
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
      </Reveal>
    </section>
  );
}

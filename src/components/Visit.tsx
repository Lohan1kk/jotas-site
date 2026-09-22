"use client";

import { FadeIn } from "@/components/motion";
import { site } from "@/lib/content";

/** Visita — endereço e mapa, sem grade de cards. */
export function Visit() {
  const c = site.copy;

  return (
    <section
      id="visita"
      className="section-pad section-y border-t border-white/10 bg-[#080808]"
      aria-labelledby="visita-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-gold">
            {c.visitEyebrow}
          </p>
          <h2
            id="visita-heading"
            className="mt-4 font-display text-4xl tracking-wide text-[#f5f5f5] md:text-5xl"
          >
            {c.visitTitle}
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-neutral-300 md:text-base">
            {c.promoBody}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <FadeIn>
            <div className="relative min-h-[18rem] overflow-hidden bg-[#0d0d0d] md:min-h-[22rem]">
              <iframe
                title="Mapa — Jota's na Liberdade"
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ filter: "invert(92%) hue-rotate(180deg) brightness(0.85)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-col justify-center">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
              Endereço
            </p>
            <p className="mt-4 font-display text-2xl tracking-wide text-[#f5f5f5] md:text-3xl">
              {site.addressShort}
            </p>
            <p className="mt-4 text-sm text-neutral-300">{site.hours.label}</p>
            <p className="mt-2 text-sm text-neutral-300">{site.phoneDisplay}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                Abrir no Maps
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-fit"
              >
                {site.instagramHandle}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

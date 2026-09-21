"use client";

import { FadeIn } from "@/components/motion";
import { site } from "@/lib/content";

/** Promo highlights + dark map + reserve CTA. */
export function Visit() {
  return (
    <section
      id="visita"
      className="section-pad section-y border-t border-line bg-ink"
      aria-labelledby="visita-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
            Visite
          </p>
          <h2
            id="visita-heading"
            className="mt-4 font-display text-4xl text-cream md:text-5xl"
          >
            Liberdade, na porta
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn className="panel flex flex-col p-8 md:p-10">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
              Destaques
            </p>
            <ul className="mt-6 flex-1 space-y-5">
              {[
                `${site.reviewsCount} avaliações no Google`,
                `Faixa ${site.priceRange}`,
                site.hours.label,
                "Pratos do dia, lanches e porções",
              ].map((line) => (
                <li
                  key={line}
                  className="border-b border-line pb-4 font-display text-xl text-cream"
                >
                  {line}
                </li>
              ))}
            </ul>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8 w-fit"
            >
              Instagram {site.instagramHandle}
            </a>
          </FadeIn>

          <FadeIn delay={0.1} className="panel overflow-hidden">
            <div className="relative aspect-[4/3] w-full bg-neutral-900 md:aspect-auto md:min-h-[22rem]">
              <iframe
                title="Mapa — Jota's na Liberdade"
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/25 mix-blend-multiply" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line p-6">
              <p className="text-sm text-muted">{site.addressShort}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] uppercase tracking-[0.2em] text-gold transition duration-300 hover:text-gold-soft"
              >
                Abrir no Maps
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

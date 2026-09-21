"use client";

import { FadeIn } from "@/components/motion";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="section-pad mx-auto grid max-w-6xl gap-12 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <FadeIn>
          <p className="font-display text-3xl tracking-[0.08em] text-cream">
            {site.shortName}
          </p>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
            Bar e Restaurante
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}. Boteco da Liberdade — comida boa e mesa cheia.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                className="transition duration-300 hover:text-gold"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-gold"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-gold"
              >
                {site.addressShort}
              </a>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            Horário
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/85">
            {site.hours.label}
          </p>
          <p className="mt-6 text-xs text-muted">
            Pagamentos: {site.payments.slice(0, 5).join(", ")}…
          </p>
        </FadeIn>
      </div>

      <div className="border-t border-line">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Av. da Liberdade, 9 — São Paulo, SP</p>
        </div>
      </div>
    </footer>
  );
}

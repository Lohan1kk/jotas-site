"use client";

import { FadeIn } from "@/components/motion";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="section-pad mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-16">
        <FadeIn>
          <p className="font-display text-3xl tracking-[0.1em] text-[#f5f5f5]">
            {site.shortName}
          </p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.3em] text-neutral-400">
            Bar e Restaurante
          </p>
          <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-neutral-400">
            {site.tagline}. Boteco da Liberdade.
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-gold">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
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
          <p className="mt-6 text-sm text-neutral-400">{site.hours.label}</p>
        </FadeIn>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 py-5 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Av. da Liberdade, 9 — São Paulo, SP</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** Symmetric info: hours | vertical photo | delivery — luxury lounge craft. */
export function InfoHours() {
  return (
    <section
      id="casa"
      className="section-pad section-y border-t border-line bg-ink"
      aria-labelledby="casa-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_minmax(240px,320px)_1fr] lg:items-center lg:gap-12">
        <FadeIn>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
            Open hours
          </p>
          <h2
            id="casa-heading"
            className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl"
          >
            Horário de funcionamento
          </h2>
          <dl className="mt-8 space-y-5 border-t border-line pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-sm uppercase tracking-[0.16em] text-muted">
                Seg–Qui
              </dt>
              <dd className="font-display text-xl text-cream">
                {site.hours.opens} – {site.hours.closesWeekday}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-sm uppercase tracking-[0.16em] text-muted">
                Sex–Dom
              </dt>
              <dd className="font-display text-xl text-cream">
                {site.hours.opens} – {site.hours.closesWeekend}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {site.addressShort}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <MediaImage
            src="/brand/fachada.png"
            alt="Interior e fachada do Jota's Bar e Restaurante"
            width={640}
            height={860}
            sizes="(max-width: 1024px) 80vw, 320px"
            quality={80}
            className="h-auto w-full object-cover"
            frameClassName="aspect-[3/4] w-full"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
            Delivery
          </p>
          <h3 className="mt-4 font-display text-3xl leading-tight text-cream md:text-4xl">
            Pedido pelo WhatsApp
          </h3>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            Lanches, beirutes, porções e pratos do dia — peça direto com a casa.
            Faixa {site.priceRange}.
          </p>
          <a
            href={site.whatsappDelivery}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 inline-flex"
          >
            Pedir agora
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

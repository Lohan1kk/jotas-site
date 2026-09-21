"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** 3-card grid: promo · map dark · action photo. */
export function Visit() {
  const c = site.copy;

  return (
    <section
      id="visita"
      className="section-pad section-y border-t border-white/10 bg-[#080808]"
      aria-labelledby="visita-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-gold">
            {c.visitEyebrow}
          </p>
          <h2
            id="visita-heading"
            className="mt-4 font-display text-4xl tracking-wide text-neutral-100 md:text-5xl"
          >
            {c.visitTitle}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <FadeIn className="flex flex-col border border-white/10 bg-[#141414] p-7 md:p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
              Destaque
            </p>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-neutral-100">
              {c.promoTitle}
            </h3>
            <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-neutral-400">
              {c.promoBody}
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8 w-fit !px-4 !py-2.5"
            >
              Perguntar no Zap
            </a>
          </FadeIn>

          <FadeIn delay={0.08} className="overflow-hidden border border-white/10 bg-[#141414]">
            <div className="relative aspect-[4/3] w-full bg-neutral-900 md:aspect-auto md:h-full md:min-h-[18rem]">
              <iframe
                title="Mapa — Jota's na Liberdade"
                src={site.mapsEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/10 p-5">
              <p className="text-xs text-neutral-400">{site.addressShort}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[0.65rem] uppercase tracking-[0.18em] text-gold transition duration-300 hover:text-gold-soft"
              >
                Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="relative min-h-[16rem] overflow-hidden border border-white/10 bg-[#141414] md:min-h-[22rem]">
            <MediaImage
              src="/brand/interior-bar.png"
              alt="Salão e bar do Jota's"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={80}
              className="object-cover"
              frameClassName="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            <div className="relative z-10 flex h-full min-h-[16rem] flex-col justify-end p-7 md:min-h-[22rem]">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                Instagram
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 font-display text-2xl tracking-wide text-neutral-100 transition duration-300 hover:text-gold"
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

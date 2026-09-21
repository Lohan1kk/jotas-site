"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** Wide cinematic banner — dramatic hospitality photo. */
export function VisualBanner() {
  return (
    <section className="relative isolate overflow-hidden" aria-label="Ambiente">
      <FadeIn y={16}>
        <div className="relative min-h-[42vh] md:min-h-[52vh]">
          <MediaImage
            src="/brand/jogo-americano.png"
            alt="Ambiente e mesa do Jota's"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
            frameClassName="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/30" />
          <div className="section-pad relative z-10 flex min-h-[42vh] items-end pb-12 md:min-h-[52vh] md:pb-16">
            <div className="max-w-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
                A casa
              </p>
              <p className="mt-4 font-display text-3xl leading-tight text-cream md:text-5xl">
                Madeira, bar cheio e mesa para os amigos
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80 md:text-base">
                Boteco paulista moderno na Liberdade — {site.reviewsCount}{" "}
                avaliações no Google.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

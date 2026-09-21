"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** Wide mid-banner — dramatic bar atmosphere. */
export function VisualBanner() {
  const c = site.copy;

  return (
    <section className="relative isolate overflow-hidden" aria-label="Ambiente">
      <FadeIn y={16}>
        <div className="relative min-h-[44vh] md:min-h-[56vh]">
          <MediaImage
            src="/brand/mid-banner.png"
            alt="Drinks e atmosfera do bar"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
            frameClassName="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-black/25" />
          <div className="section-pad relative z-10 flex min-h-[44vh] items-end pb-12 md:min-h-[56vh] md:pb-16">
            <div className="max-w-xl">
              <p className="text-[0.68rem] uppercase tracking-[0.38em] text-gold">
                {c.bannerEyebrow}
              </p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-wide text-neutral-100 md:text-5xl">
                {c.bannerTitle}
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-neutral-300 md:text-base">
                {c.bannerBody}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

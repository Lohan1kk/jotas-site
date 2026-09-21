"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** Full-bleed mid banner — fills the viewport with atmosphere. */
export function VisualBanner() {
  const c = site.copy;

  return (
    <section className="relative isolate overflow-hidden" aria-label="Ambiente">
      <FadeIn y={16}>
        <div className="relative min-h-[52vh] md:min-h-[68vh]">
          <MediaImage
            src="/brand/mid-banner.png"
            alt="Drinks e atmosfera do bar"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
            frameClassName="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-[#080808]/30" />
          <div className="section-pad relative z-10 flex min-h-[52vh] items-end pb-14 md:min-h-[68vh] md:pb-20">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
                {c.bannerEyebrow}
              </p>
              <p className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-wide text-neutral-100">
                {c.bannerTitle}
              </p>
              <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-neutral-300 md:text-lg">
                {c.bannerBody}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

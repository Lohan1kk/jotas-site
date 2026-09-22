"use client";

import { FadeIn } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import { site } from "@/lib/content";

/** Hours | tall interior | Happy Hour — generous scale. */
export function InfoHours() {
  const c = site.copy;

  return (
    <section
      id="casa"
      className="section-pad section-y bg-[#080808]"
      aria-labelledby="casa-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_minmax(280px,380px)_1fr] lg:gap-16">
        <FadeIn>
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
            {c.hoursEyebrow}
          </p>
          <h2
            id="casa-heading"
            className="mt-5 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] tracking-wide text-[#f5f5f5]"
          >
            {c.hoursTitle}
          </h2>
          <dl className="mt-10 space-y-6 border-t border-white/10 pt-8">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-[0.75rem] uppercase tracking-[0.2em] text-neutral-400">
                Seg–Qui
              </dt>
              <dd className="font-display text-2xl text-[#f5f5f5]">
                {site.hours.opens} – {site.hours.closesWeekday}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-[0.75rem] uppercase tracking-[0.2em] text-neutral-400">
                Sex–Dom
              </dt>
              <dd className="font-display text-2xl text-[#f5f5f5]">
                {site.hours.opens} – {site.hours.closesWeekend}
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-neutral-400">
            {site.addressShort}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <MediaImage
            src="/brand/interior-bar.png"
            alt="Interior do bar do Jota's — prateleiras e salão"
            width={760}
            height={1000}
            sizes="(max-width: 1024px) 85vw, 380px"
            quality={80}
            className="h-full w-full object-cover"
            frameClassName="aspect-[3/4] w-full"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
            {c.happyEyebrow}
          </p>
          <h3 className="mt-5 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] tracking-wide text-[#f5f5f5]">
            {c.happyTitle}
          </h3>
          <p className="mt-8 text-sm leading-relaxed text-neutral-400 md:text-base">
            {c.happyBody}
          </p>
          <p className="mt-5 text-xs text-neutral-500">{c.happyNote}</p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-10 inline-flex"
          >
            Falar no WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

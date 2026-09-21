import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export function Story() {
  return (
    <section
      id="historia"
      className="section-pad relative py-24 md:py-32"
      aria-labelledby="historia-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            A casa
          </p>
          <h2
            id="historia-heading"
            className="mt-4 font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Madeira, bar cheio e mesa para os amigos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            O Jota&apos;s é boteco paulista moderno: acolhedor, social e com
            comida de verdade. Mezanino, balcão iluminado e o ritmo da Liberdade
            logo na porta — Av. da Liberdade, 9.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Faixa {site.priceRange} · cerca de {site.reviewsCount} avaliações no
            Google · salão e delivery.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8"
          >
            {site.instagramHandle}
          </a>
        </Reveal>

        <Reveal className="relative lg:col-span-7" delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
            <Image
              src="/brand/jogo-americano.png"
              alt="Jogo americano do Jota's com identidade chalkboard e bem-vindo"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
          </div>
          <p className="mt-4 font-display text-2xl text-gold-soft md:text-3xl">
            “{site.tagline}”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

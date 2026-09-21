import Image from "next/image";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-dvh items-end overflow-hidden"
    >
      <div className="hero-media absolute inset-0">
        <Image
          src="/brand/fachada.png"
          alt="Fachada e salão do Jota's Bar e Restaurante na Liberdade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="hero-copy max-w-3xl">
          <p className="font-display text-5xl leading-none tracking-[0.06em] text-cream sm:text-6xl md:text-8xl">
            {site.shortName}
          </p>
          <h1 className="mt-5 max-w-xl font-display text-3xl leading-tight text-cream/95 sm:text-4xl md:text-5xl">
            Boteco da Liberdade,{" "}
            <span className="text-gold-soft">{site.tagline.toLowerCase()}</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            Pratos do dia, lanches artesanais e porções para a mesa cheia — no
            coração da Liberdade, SP.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-gold-soft"
            >
              Ver cardápio
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-cream/35 px-6 py-3 text-sm uppercase tracking-[0.16em] text-cream transition hover:border-gold hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export function Reservations() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "");
    const pessoas = String(data.get("pessoas") || "");
    const dataHora = String(data.get("quando") || "");
    const msg = encodeURIComponent(
      `Olá! Gostaria de reservar mesa no Jota's.\nNome: ${nome}\nPessoas: ${pessoas}\nQuando: ${dataHora}`,
    );
    window.open(`${site.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="reservas" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Reservas & contacto
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-cream md:text-5xl">
            Guarde a mesa
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70">
            Fale conosco pelo WhatsApp ou telefone. {site.hoursNote}
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted">Morada</dt>
              <dd className="mt-2 text-cream/90">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold/40 underline-offset-4 transition hover:text-gold"
                >
                  {site.address}
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted">Telefone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-lg text-gold-soft hover:text-gold"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted">
                Instagram
              </dt>
              <dd className="mt-2">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/90 hover:text-gold"
                >
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={100}>
          <form
            onSubmit={onSubmit}
            className="border border-line bg-ink-soft/60 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  Nome
                </span>
                <input
                  name="nome"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-cream outline-none transition focus:border-gold"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  Pessoas
                </span>
                <input
                  name="pessoas"
                  type="number"
                  min={1}
                  max={20}
                  required
                  defaultValue={2}
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-cream outline-none transition focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted">
                  Quando
                </span>
                <input
                  name="quando"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-cream outline-none transition focus:border-gold"
                  placeholder="Ex.: sex 20h"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-gold py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-gold-soft sm:w-auto sm:px-10"
            >
              Enviar no WhatsApp
            </button>
            {sent && (
              <p className="mt-4 text-sm text-gold-soft">
                Abrimos o WhatsApp com a sua mensagem.
              </p>
            )}
          </form>

          <div className="mt-8 overflow-hidden border border-line">
            <iframe
              title="Mapa — Jota's Bar e Restaurante"
              src={site.mapsEmbed}
              className="h-64 w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

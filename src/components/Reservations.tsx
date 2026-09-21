"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
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
    <Section id="reservas" tone="raised" labelledBy="reservas-heading">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            index="04"
            eyebrow="Reservas & contacto"
            titleId="reservas-heading"
            title="Guarde a mesa"
            lead="Fale conosco pelo WhatsApp ou telefone. Reserva e delivery no mesmo canal."
          />

          <dl className="mt-10 space-y-6 text-[0.9375rem]">
            <div>
              <dt className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">Horário</dt>
              <dd className="mt-2 text-cream">{site.hours.label}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">Morada</dt>
              <dd className="mt-2 text-cream">
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
              <dt className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">Telefone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="text-lg text-gold-soft transition hover:text-gold"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] uppercase tracking-[0.2em] text-gold">
                Instagram
              </dt>
              <dd className="mt-2">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream transition hover:text-gold"
                >
                  {site.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsappReserve}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp reserva
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Abrir no Maps
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={100}>
          <form
            onSubmit={onSubmit}
            className="panel p-6 md:p-8"
            aria-label="Pedido de reserva"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-[0.8125rem] uppercase tracking-[0.18em] text-gold">
                  Nome
                </span>
                <input
                  name="nome"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-cream outline-none transition focus:border-gold"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="text-[0.8125rem] uppercase tracking-[0.18em] text-gold">
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
                <span className="text-[0.8125rem] uppercase tracking-[0.18em] text-gold">
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
            <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
              Enviar no WhatsApp
            </button>
            {sent && (
              <p className="mt-4 text-sm text-gold-soft" role="status">
                Abrimos o WhatsApp com a sua mensagem.
              </p>
            )}
          </form>

          <div className="panel relative mt-8 overflow-hidden">
            <iframe
              title="Mapa — Jota's Bar e Restaurante na Av. da Liberdade, 9"
              src={site.mapsEmbed}
              className="h-64 w-full grayscale contrast-125 md:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 border border-line bg-ink/90 px-3 py-2 text-[0.75rem] uppercase tracking-[0.16em] text-cream backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              Ampliar mapa
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

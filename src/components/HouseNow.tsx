"use client";

import { Bike, Clock3, Star, UtensilsCrossed } from "lucide-react";
import { useMemo } from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { pratosDoDia, site } from "@/lib/content";

const weekdayToMenu: Record<string, (typeof pratosDoDia)[number]["day"]> = {
  "segunda-feira": "Segunda",
  "terça-feira": "Terça",
  "quarta-feira": "Quarta",
  "quinta-feira": "Quinta",
  "sexta-feira": "Sexta",
  sábado: "Sábado",
  domingo: "Domingo",
};

function todayMenu() {
  const weekday = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    timeZone: "America/Sao_Paulo",
  })
    .format(new Date())
    .toLowerCase();
  const day = weekdayToMenu[weekday];
  return pratosDoDia.find((block) => block.day === day) ?? pratosDoDia[0];
}

export function HouseNow() {
  const menu = useMemo(() => todayMenu(), []);

  const notes = [
    {
      icon: UtensilsCrossed,
      label: `Prato de ${menu.day.toLowerCase()}`,
      title: menu.items[0],
      detail: menu.items.slice(1).join(" · "),
    },
    {
      icon: Clock3,
      label: "Horário",
      title: site.hours.label,
      detail: "Salão e delivery no mesmo período.",
    },
    {
      icon: Bike,
      label: "Delivery",
      title: site.phoneDisplay,
      detail: "Pedido pelo WhatsApp, no número do salão.",
    },
    {
      icon: Star,
      label: "Google",
      title: `${site.reviewsCount} avaliações`,
      detail: `Faixa ${site.priceRange} · ${site.addressShort}`,
    },
  ];

  return (
    <Section id="agora" labelledBy="agora-heading" tone="raised">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          index="00"
          eyebrow="Agora na casa"
          titleId="agora-heading"
          title="O que está a sair hoje"
          lead="Prato do dia, horário e delivery — no mesmo ritmo da casa."
        />

        <AnimatedList delay={1400} maxVisible={3} className="w-full items-stretch">
          {notes.map((note) => (
            <article
              key={note.label}
              className="panel flex w-full items-start gap-4 px-5 py-4"
            >
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-gold">
                <note.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.75rem] uppercase tracking-[0.2em] text-gold">
                  {note.label}
                </span>
                <span className="mt-1 block font-display text-2xl leading-tight text-cream">
                  {note.title}
                </span>
                <span className="mt-1 block text-[0.9375rem] leading-snug text-cream/85">
                  {note.detail}
                </span>
              </span>
            </article>
          ))}
        </AnimatedList>
      </div>
    </Section>
  );
}

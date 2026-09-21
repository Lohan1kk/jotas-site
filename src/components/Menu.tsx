"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  beirutes,
  bebidas,
  comerciais,
  lanches,
  porcoes,
  pratosDoDia,
  sucos,
} from "@/lib/content";

const tabs = [
  { id: "dia", label: "Pratos do dia" },
  { id: "lanches", label: "Lanches" },
  { id: "beirutes", label: "Beirutes" },
  { id: "porcoes", label: "Porções" },
  { id: "bebidas", label: "Bebidas" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Menu() {
  const [tab, setTab] = useState<TabId>("dia");
  const baseId = useId();

  return (
    <section
      id="cardapio"
      className="section-pad border-t border-line py-24 md:py-32"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Cardápio
          </p>
          <h2
            id={`${baseId}-heading`}
            className="mt-4 max-w-2xl font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Do prato do dia ao beirute Jotas Tudo
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
            Destaques tipográficos do salão. Preços de sucos e bebidas conforme
            o cardápio; demais valores no balcão ou delivery.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="-mx-1 flex gap-2 overflow-x-auto border-b border-line px-1 pb-4"
          >
            {tabs.map((item) => {
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setTab(item.id)}
                  onKeyDown={(e) => {
                    const idx = tabs.findIndex((t) => t.id === tab);
                    if (e.key === "ArrowRight") {
                      e.preventDefault();
                      setTab(tabs[(idx + 1) % tabs.length].id);
                    }
                    if (e.key === "ArrowLeft") {
                      e.preventDefault();
                      setTab(tabs[(idx - 1 + tabs.length) % tabs.length].id);
                    }
                  }}
                  className={`shrink-0 px-4 py-2 text-sm uppercase tracking-[0.14em] transition ${
                    selected
                      ? "bg-gold text-ink"
                      : "text-cream/65 hover:text-gold"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={100}>
          <div
            role="tabpanel"
            id={`${baseId}-panel-${tab}`}
            aria-labelledby={`${baseId}-tab-${tab}`}
            className="relative border border-line bg-ink-soft/40 px-5 py-8 sm:px-8 md:px-10 md:py-10"
          >
            <div
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              aria-hidden="true"
            />

            {tab === "dia" && (
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="space-y-8">
                  {pratosDoDia.map((block) => (
                    <div key={block.day}>
                      <h3 className="font-display text-2xl text-gold-soft">
                        {block.day}
                      </h3>
                      <ul className="mt-3 space-y-1.5 border-l border-line pl-4 text-cream/80">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-gold-soft">
                    Comerciais
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Acompanha arroz, feijão, fritas ou salada.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {comerciais.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-cream/85"
                      >
                        <span className="font-display text-xl">{item}</span>
                        <span
                          className="h-px flex-1 bg-line"
                          aria-hidden="true"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "lanches" && (
              <ul className="mx-auto max-w-2xl space-y-6">
                {lanches.map((item) => (
                  <li key={item.name} className="border-b border-line pb-5">
                    <h3 className="font-display text-2xl text-cream md:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
                <p className="text-sm text-muted">
                  Lanches artesanais no pão brioche.
                </p>
              </ul>
            )}

            {tab === "beirutes" && (
              <ul className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
                {beirutes.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-line pb-4 sm:border-b-0 sm:border-l sm:border-line sm:pb-0 sm:pl-5"
                  >
                    <h3 className="font-display text-2xl text-cream">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            )}

            {tab === "porcoes" && (
              <ul className="mx-auto grid max-w-3xl gap-x-10 gap-y-1 sm:grid-cols-2">
                {porcoes.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 font-display text-xl text-cream/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {tab === "bebidas" && (
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-display text-2xl text-gold-soft">
                    Sucos naturais
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {sucos.bases.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between gap-4 border-b border-line py-2.5 text-cream/85"
                      >
                        <span>{item.name}</span>
                        <span className="tabular-nums text-gold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Sabores: {sucos.flavors}.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-gold-soft">
                    Bebidas diversas
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {bebidas.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between gap-4 border-b border-line py-2.5 text-cream/85"
                      >
                        <span>{item.name}</span>
                        <span className="tabular-nums text-gold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted">
                    Refrigerantes e outras opções no balcão.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

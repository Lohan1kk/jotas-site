"use client";

import Image from "next/image";
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
            Destaques do salão, com preços de sucos e bebidas conforme o
            cardápio físico. Demais valores no balcão ou delivery.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="-mx-1 flex gap-2 overflow-x-auto border-b border-line pb-4 px-1"
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

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={100}>
            <div
              role="tabpanel"
              id={`${baseId}-panel-${tab}`}
              aria-labelledby={`${baseId}-tab-${tab}`}
            >
              {tab === "dia" && (
                <div className="space-y-8">
                  {pratosDoDia.map((block) => (
                    <div key={block.day} className="border-b border-line pb-6">
                      <h3 className="font-display text-2xl text-gold-soft">
                        {block.day}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-cream/80">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <h3 className="font-display text-2xl text-gold-soft">
                      Comerciais
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      Acompanha arroz, feijão, fritas ou salada.
                    </p>
                    <ul className="mt-3 columns-2 gap-6 text-cream/80">
                      {comerciais.map((item) => (
                        <li key={item} className="mb-1.5">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {tab === "lanches" && (
                <ul className="space-y-6">
                  {lanches.map((item) => (
                    <li key={item.name} className="border-b border-line pb-5">
                      <h3 className="font-display text-2xl text-cream">
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
                <ul className="space-y-5">
                  {beirutes.map((item) => (
                    <li key={item.name} className="border-b border-line pb-4">
                      <h3 className="font-display text-2xl text-cream">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              )}

              {tab === "porcoes" && (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {porcoes.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line py-2 text-cream/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {tab === "bebidas" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="font-display text-2xl text-gold-soft">
                      Sucos naturais
                    </h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {sucos.bases.map((item) => (
                        <li
                          key={item.name}
                          className="flex justify-between gap-4 border-b border-line py-2 text-cream/85"
                        >
                          <span>{item.name}</span>
                          <span className="text-gold">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted">
                      Sabores: {sucos.flavors}.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-gold-soft">
                      Bebidas diversas
                    </h3>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {bebidas.map((item) => (
                        <li
                          key={item.name}
                          className="flex justify-between gap-4 border-b border-line py-2 text-cream/85"
                        >
                          <span>{item.name}</span>
                          <span className="text-gold">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-muted">
                      Refrigerantes e outras opções no cardápio físico do salão.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={160}>
            <div className="space-y-4 lg:sticky lg:top-28">
              <figure className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                <Image
                  src={
                    tab === "bebidas" || tab === "porcoes"
                      ? "/brand/cardapio-porcoes-sucos.png"
                      : "/brand/cardapio-pratos-lanches.png"
                  }
                  alt={
                    tab === "bebidas" || tab === "porcoes"
                      ? "Cardápio — porções e sucos"
                      : "Cardápio impresso — pratos do dia e lanches"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition duration-700"
                />
              </figure>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <figure className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brand/cardapio-bebidas.png"
                    alt="Cardápio — bebidas e sucos com preços"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </figure>
                <figure className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brand/jogo-americano.png"
                    alt="Jogo americano Jota's"
                    fill
                    sizes="20vw"
                    className="object-cover object-center"
                  />
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

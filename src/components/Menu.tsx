"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  beirutes,
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
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Menu() {
  const [tab, setTab] = useState<TabId>("dia");

  return (
    <section id="cardapio" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Cardápio
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-cream md:text-5xl">
            Do prato do dia ao beirute Jotas Tudo
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
            Destaques do salão. Preços de sucos conforme o cardápio físico;
            demais valores no balcão ou delivery.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="flex flex-wrap gap-2 border-b border-line pb-4"
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={`px-4 py-2 text-sm uppercase tracking-[0.14em] transition ${
                  tab === item.id
                    ? "bg-gold text-ink"
                    : "text-cream/65 hover:text-gold"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={100}>
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
              <div>
                <p className="mb-6 text-sm text-muted">
                  Todos com pão sírio, alface, tomate, queijo, bacon e ovo.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {beirutes.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-4 py-3 text-cream/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "porcoes" && (
              <div className="space-y-10">
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
              </div>
            )}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={160}>
            <div className="sticky top-28 space-y-4">
              <figure className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/brand/cardapio-pratos-lanches.png"
                  alt="Cardápio impresso — pratos do dia e lanches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </figure>
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brand/cardapio-porcoes-sucos.png"
                    alt="Cardápio — porções e sucos"
                    fill
                    sizes="20vw"
                    className="object-cover object-top"
                  />
                </figure>
                <figure className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/brand/cardapio-bebidas.png"
                    alt="Cardápio — bebidas e sucos com preços"
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

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { easeOutExpo } from "@/components/motion";
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
  const reduce = useReducedMotion();

  return (
    <Section id="cardapio" labelledBy={`${baseId}-heading`}>
      <div>
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Cardápio"
            titleId={`${baseId}-heading`}
            title="Do prato do dia ao beirute Jotas Tudo"
            lead="Destaques tipográficos do salão. Preços de sucos e bebidas conforme o cardápio; demais valores no balcão ou delivery."
          />
        </Reveal>

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="-mx-1 flex gap-2 overflow-x-auto border-b border-line px-1 pb-1"
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
                  className={`relative shrink-0 px-4 py-3 text-sm uppercase tracking-[0.14em] transition ${
                    selected ? "text-ink" : "text-cream/80 hover:text-gold"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId={reduce ? undefined : "menu-tab"}
                      className="absolute inset-0 bg-gold"
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={100}>
          <div className="panel px-5 py-8 sm:px-8 md:px-10 md:py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                role="tabpanel"
                id={`${baseId}-panel-${tab}`}
                aria-labelledby={`${baseId}-tab-${tab}`}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
              >
            {tab === "dia" && (
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="space-y-8">
                  {pratosDoDia.map((block) => (
                    <div key={block.day}>
                      <h3 className="font-display text-2xl text-gold-soft">
                        {block.day}
                      </h3>
                      <ul className="mt-3 space-y-1.5 border-l border-line pl-4 text-cream/90">
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
                  <p className="mt-2 text-[0.9375rem] text-muted">
                    Acompanha arroz, feijão, fritas ou salada.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {comerciais.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-cream/90"
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
                    <p className="mt-1 text-[0.9375rem] text-muted">{item.detail}</p>
                  </li>
                ))}
                <p className="text-[0.9375rem] text-muted">
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
                    <p className="mt-1 text-[0.9375rem] text-muted">{item.detail}</p>
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
                        className="flex justify-between gap-4 border-b border-line py-2.5 text-cream/90"
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
                        className="flex justify-between gap-4 border-b border-line py-2.5 text-cream/90"
                      >
                        <span>{item.name}</span>
                        <span className="tabular-nums text-gold">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.9375rem] text-muted">
                    Refrigerantes e outras opções no balcão.
                  </p>
                </div>
              </div>
            )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

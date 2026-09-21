"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn, easeOutExpo } from "@/components/motion";
import { MediaImage } from "@/components/MediaImage";
import {
  beirutes,
  bebidas,
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

/** We Recommend — list left, photo right. */
export function Menu() {
  const [tab, setTab] = useState<TabId>("lanches");
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <section
      id="cardapio"
      className="section-pad section-y border-t border-line bg-ink-soft"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-gold">
            We recommend
          </p>
          <h2
            id={`${baseId}-heading`}
            className="mt-4 max-w-2xl font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Destaques da casa
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Preços de sucos e bebidas conforme o cardápio; demais valores no
            balcão ou delivery.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="-mx-1 flex gap-1 overflow-x-auto border-b border-line pb-0"
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
                  className={`relative shrink-0 px-4 py-3.5 text-[0.7rem] uppercase tracking-[0.16em] transition duration-300 ${
                    selected ? "text-gold" : "text-muted hover:text-cream"
                  }`}
                >
                  {item.label}
                  {selected && (
                    <motion.span
                      layoutId={reduce ? undefined : "menu-underline"}
                      className="absolute inset-x-4 bottom-0 h-px bg-gold"
                      transition={{ duration: 0.3, ease: easeOutExpo }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              role="tabpanel"
              id={`${baseId}-panel-${tab}`}
              aria-labelledby={`${baseId}-tab-${tab}`}
              className="gpu-layer min-h-[20rem]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
            >
              {tab === "dia" && <PratosList />}
              {tab === "lanches" && <NamedList items={lanches} />}
              {tab === "beirutes" && <NamedList items={beirutes} />}
              {tab === "porcoes" && <SimpleList items={porcoes} />}
              {tab === "bebidas" && <BebidasList />}
            </motion.div>
          </AnimatePresence>

          <FadeIn delay={0.12} className="relative hidden lg:block">
            <MediaImage
              src="/brand/fachada-hero.jpg"
              alt="Ambiente do Jota's — salão e bar"
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 0px, 45vw"
              quality={80}
              className="h-full w-full object-cover"
              frameClassName="aspect-[4/5] w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-cream">
              Mesa cheia na Liberdade
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function NamedList({
  items,
}: {
  items: readonly { name: string; detail: string }[];
}) {
  return (
    <ul className="divide-y divide-line">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-start justify-between gap-6 py-5"
        >
          <div>
            <p className="font-display text-xl text-cream md:text-2xl">
              {item.name}
            </p>
            <p className="mt-1 text-sm text-muted">{item.detail}</p>
          </div>
          <span className="shrink-0 pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-gold/80">
            Balcão
          </span>
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
      {items.map((name) => (
        <li
          key={name}
          className="border-b border-line py-4 font-display text-lg text-cream"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

function PratosList() {
  return (
    <ul className="space-y-8">
      {pratosDoDia.map((day) => (
        <li key={day.day}>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
            {day.day}
          </p>
          <ul className="mt-3 space-y-2">
            {day.items.map((item) => (
              <li key={item} className="font-display text-lg text-cream">
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function BebidasList() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
          Sucos
        </p>
        <ul className="mt-4 divide-y divide-line">
          {sucos.bases.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-cream">{item.name}</span>
              <span className="font-display text-lg text-gold">{item.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-muted">{sucos.flavors}</p>
      </div>
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">
          Outras bebidas
        </p>
        <ul className="mt-4 divide-y divide-line">
          {bebidas.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-cream">{item.name}</span>
              <span className="font-display text-lg text-gold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

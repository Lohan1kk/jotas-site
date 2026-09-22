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
  site,
  sucos,
} from "@/lib/content";

const tabs = [
  { id: "lanches", label: "Lanches" },
  { id: "beirutes", label: "Beirutes" },
  { id: "dia", label: "Pratos do dia" },
  { id: "porcoes", label: "Porções" },
  { id: "bebidas", label: "Bebidas" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/** Recommend section — list + action photo. */
export function Menu() {
  const [tab, setTab] = useState<TabId>("lanches");
  const baseId = useId();
  const reduce = useReducedMotion();
  const c = site.copy;

  return (
    <section
      id="cardapio"
      className="section-pad section-y border-t border-white/10 bg-[#0d0d0d]"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-gold">
            {c.menuEyebrow}
          </p>
          <h2
            id={`${baseId}-heading`}
            className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-wide text-[#f5f5f5] md:text-5xl"
          >
            {c.menuTitle}
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-neutral-400 md:text-base">
            {c.menuLead}
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10">
          <div
            role="tablist"
            aria-label="Secções do cardápio"
            className="flex gap-1 overflow-x-auto border-b border-white/10"
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
                  className={`relative shrink-0 px-4 py-3.5 text-[0.68rem] uppercase tracking-[0.18em] transition duration-300 ${
                    selected ? "text-gold" : "text-neutral-400 hover:text-[#f5f5f5]"
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
              style={{ willChange: "transform, opacity" }}
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

          <FadeIn delay={0.1} className="relative hidden lg:block">
            <MediaImage
              src="/brand/bar-pour.png"
              alt="Drink sendo servido no bar do Jota's"
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 0px, 45vw"
              quality={80}
              className="h-full w-full object-cover"
              frameClassName="aspect-[4/5] w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/70 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl tracking-wide text-[#f5f5f5]">
              Liberdade · São Paulo
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
    <ul className="divide-y divide-white/10">
      {items.map((item) => (
        <li key={item.name} className="flex items-start justify-between gap-6 py-5">
          <div>
            <p className="font-display text-xl tracking-wide text-[#f5f5f5] md:text-2xl">
              {item.name}
            </p>
            <p className="mt-1 text-sm font-light text-neutral-400">{item.detail}</p>
          </div>
          <span className="shrink-0 pt-2 text-[0.65rem] uppercase tracking-[0.2em] text-gold/85">
            Balcão
          </span>
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {items.map((name) => (
        <li
          key={name}
          className="border-b border-white/10 py-4 font-display text-lg tracking-wide text-[#f5f5f5]"
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
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
            {day.day}
          </p>
          <ul className="mt-3 space-y-2">
            {day.items.map((item) => (
              <li
                key={item}
                className="font-display text-lg tracking-wide text-[#f5f5f5]"
              >
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
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
          Sucos
        </p>
        <ul className="mt-4 divide-y divide-white/10">
          {sucos.bases.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-[#f5f5f5]">{item.name}</span>
              <span className="font-display text-lg text-gold">{item.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-neutral-500">
          {sucos.flavors}
        </p>
      </div>
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
          Outras bebidas
        </p>
        <ul className="mt-4 divide-y divide-white/10">
          {bebidas.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="text-[#f5f5f5]">{item.name}</span>
              <span className="font-display text-lg text-gold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

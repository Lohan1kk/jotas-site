"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#historia", label: "História" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#reservas", label: "Reservas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#topo" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.08em] text-cream transition group-hover:text-gold md:text-3xl">
            {site.shortName}
          </span>
          <span className="mt-0.5 text-[0.65rem] uppercase tracking-[0.28em] text-muted">
            Bar e Restaurante
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-cream/75 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 text-sm uppercase tracking-[0.16em] text-gold-soft transition hover:bg-gold hover:text-ink"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-6 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit border border-gold px-4 py-2 text-sm uppercase tracking-[0.16em] text-gold"
              onClick={() => setOpen(false)}
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

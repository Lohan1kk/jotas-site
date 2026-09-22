"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

const links = [
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#visita", label: "Visita" },
];

/** Sticky nav — tinta sólida, leitura limpa. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#080808]/95 backdrop-blur-md"
          : "border-b-0 bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between md:h-[4.75rem]">
        <a
          href="#topo"
          className="group flex flex-col gap-1 leading-none no-underline"
        >
          <span className="font-display text-2xl tracking-[0.12em] text-[#f5f5f5] transition duration-300 group-hover:text-gold md:text-[1.85rem]">
            {site.shortName}
          </span>
          <span className="text-[0.58rem] uppercase tracking-[0.34em] text-neutral-400">
            Bar e Restaurante
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.68rem] uppercase tracking-[0.24em] text-[#f5f5f5]/90 transition duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href="#cardapio"
            className="btn-primary !px-4 !py-2.5"
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Cardápio
          </motion.a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[#f5f5f5] lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-px w-6 bg-current transition duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            className="border-t border-white/10 bg-[#080808] px-6 py-8 lg:hidden gpu-layer"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
          >
            <nav className="flex flex-col gap-5" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.22em] text-[#f5f5f5]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cardapio"
                className="btn-primary mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Cardápio
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

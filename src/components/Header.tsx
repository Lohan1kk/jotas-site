"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { easeOutExpo } from "@/components/motion";
import { site } from "@/lib/content";

const links = [
  { href: "#historia", label: "História" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#delivery", label: "Delivery" },
  { href: "#reservas", label: "Reservas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    const first = panelRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(12, 11, 10, 0.88)"
          : "rgba(12, 11, 10, 0)",
        borderBottomColor: scrolled
          ? "rgba(244, 239, 230, 0.12)"
          : "rgba(244, 239, 230, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: easeOutExpo }}
      style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
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

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm uppercase tracking-[0.18em] text-cream/75 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href={site.whatsappReserve}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2"
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Reservar
          </motion.a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center text-cream lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
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

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            ref={panelRef}
            className="border-t border-line bg-ink/95 px-6 py-6 lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile">
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
                href={site.whatsappReserve}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Reservar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

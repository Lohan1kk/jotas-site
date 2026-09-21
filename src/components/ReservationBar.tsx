"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/content";

/** Compact reservation widget under hero — WhatsApp handoff. */
export function ReservationBar() {
  const [people, setPeople] = useState("2");
  const [when, setWhen] = useState("");

  const message = [
    "Olá! Gostaria de reservar uma mesa no Jota's.",
    `Preferência: ${people} pessoa(s)${when ? ` · ${when}` : ""}.`,
  ].join("\n");
  const href = `https://wa.me/5511916364751?text=${encodeURIComponent(message)}`;

  return (
    <section
      className="section-pad relative z-20 -mt-8 md:-mt-10"
      aria-label="Reserva rápida"
      id="reservar"
    >
      <FadeIn className="mx-auto max-w-5xl border border-white/10 bg-[#141414]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-5">
        <form
          className="grid gap-3 md:grid-cols-[1.2fr_1fr_auto] md:items-end"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(href, "_blank", "noopener,noreferrer");
          }}
        >
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
              Quando
            </span>
            <input
              type="datetime-local"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              className="mt-2 w-full border border-white/10 bg-[#0d0d0d] px-3 py-3 text-sm text-neutral-100 outline-none transition focus:border-gold/50"
            />
          </label>
          <label className="block">
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
              Pessoas
            </span>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="mt-2 w-full border border-white/10 bg-[#0d0d0d] px-3 py-3 text-sm text-neutral-100 outline-none transition focus:border-gold/50"
            >
              {["1", "2", "3", "4", "5", "6", "8", "10+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "pessoa" : "pessoas"}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-primary h-[3.15rem] md:mt-0">
            Reservar
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-neutral-400 md:text-left">
          Confirmação pelo WhatsApp · {site.addressShort}
        </p>
      </FadeIn>
    </section>
  );
}

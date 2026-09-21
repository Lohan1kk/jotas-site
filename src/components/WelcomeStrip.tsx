import { site } from "@/lib/content";

export function WelcomeStrip() {
  const items = [...site.welcomeStrip, ...site.welcomeStrip];

  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-soft/80 py-3"
      aria-hidden="true"
    >
      <div className="marquee-track gap-10 px-6 text-xs uppercase tracking-[0.28em] text-stone sm:text-sm">
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="inline-flex items-center gap-10">
            <span>{label}</span>
            <span className="text-gold/70" aria-hidden="true">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

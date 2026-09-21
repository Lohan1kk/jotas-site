import { site } from "@/lib/content";

export function StickyWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-gold/50 bg-ink/90 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:bg-gold hover:text-ink md:bottom-8 md:right-8"
      aria-label="Abrir WhatsApp do Jota's"
    >
      <span aria-hidden="true" className="text-base leading-none">
        ✦
      </span>
      WhatsApp
    </a>
  );
}

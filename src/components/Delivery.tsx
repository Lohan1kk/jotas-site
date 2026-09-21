import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export function Delivery() {
  return (
    <section
      id="delivery"
      className="section-pad border-t border-line py-20 md:py-28"
      aria-labelledby="delivery-heading"
    >
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-line bg-gradient-to-br from-ink-soft via-ink to-seat/40 px-6 py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            Delivery
          </p>
          <h2
            id="delivery-heading"
            className="mt-4 max-w-xl font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Pedido no WhatsApp
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            Mesmo número do salão: {site.phoneDisplay}. Aceitamos{" "}
            {site.payments.slice(0, 5).join(", ")} e mais — confira no flyer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsappDelivery}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir delivery
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost">
              Ligar agora
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-pad border-t border-line py-14 pb-24 md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl tracking-[0.08em] text-cream">
            {site.shortName}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cream/75">
            Bar e Restaurante · Liberdade
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/85">
            {site.addressShort}
            <br />
            <a
              href={`tel:${site.phoneTel}`}
              className="transition hover:text-gold"
            >
              {site.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gold"
            >
              {site.instagramHandle}
            </a>
          </p>
          <p className="mt-3 text-sm text-cream/85">{site.hours.label}</p>
        </div>

        <div className="max-w-md">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-gold">
            Pagamentos
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/85">
            {site.payments.join(" · ")}
          </p>
          <nav
            className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-[0.14em] text-cream/85"
            aria-label="Rodapé"
          >
            <a href="#cardapio" className="hover:text-gold">
              Cardápio
            </a>
            <a href="#delivery" className="hover:text-gold">
              Delivery
            </a>
            <a href="#reservas" className="hover:text-gold">
              Reservas
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Maps
            </a>
          </nav>
          <p className="mt-6 text-[0.8125rem] text-cream/75">
            © {new Date().getFullYear()} {site.name}. Reservas e delivery pelo
            WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}

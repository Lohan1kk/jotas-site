import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-pad border-t border-line py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl tracking-[0.08em] text-cream">
            {site.shortName}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted">
            Bar e Restaurante · Liberdade
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            {site.addressShort}
            <br />
            {site.phoneDisplay} · {site.instagramHandle}
          </p>
        </div>

        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            Pagamentos
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {site.payments.join(" · ")}
          </p>
          <p className="mt-6 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Site de marketing —
            confirme horários e disponibilidade no WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}

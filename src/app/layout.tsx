import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";
import { cn } from "@/lib/utils";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jota's Bar e Restaurante | Liberdade, São Paulo",
  description:
    "Boteco paulista moderno na Liberdade. Pratos do dia, lanches artesanais, beirutes e porções — Av. da Liberdade, 9. Seg–qui 6h–23h · Sex–dom 6h–23h30. Faixa R$ 40–60.",
  metadataBase: new URL("https://jotas-site.vercel.app"),
  openGraph: {
    title: "Jota's Bar e Restaurante",
    description:
      "Tamanho dos seus sonhos. Comida boa, bar cheio e Liberdade no endereço. Seg–qui 6h–23h · Sex–dom até 23h30.",
    images: ["/brand/wordmark.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  image: ["https://jotas-site.vercel.app/brand/fachada-hero.jpg"],
  url: "https://jotas-site.vercel.app",
  telephone: site.phoneTel,
  priceRange: site.priceRange,
  servesCuisine: ["Brasileira", "Bar", "Lanches"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. da Liberdade, 9",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01503-001",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: site.hours.opens,
      closes: site.hours.closesWeekday,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: site.hours.opens,
      closes: site.hours.closesWeekend,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full antialiased", display.variable, body.variable)}
    >
      <body className="min-h-full flex flex-col atmosphere">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

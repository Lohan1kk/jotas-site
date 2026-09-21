import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

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
    "Boteco paulista moderno na Liberdade. Pratos do dia, lanches artesanais, beirutes e porções — Av. da Liberdade, 9. Faixa R$ 40–60.",
  metadataBase: new URL("https://jotas-site.vercel.app"),
  openGraph: {
    title: "Jota's Bar e Restaurante",
    description:
      "Tamanho dos seus sonhos. Comida boa, bar cheio e Liberdade no endereço.",
    images: ["/brand/fachada.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col atmosphere">{children}</body>
    </html>
  );
}

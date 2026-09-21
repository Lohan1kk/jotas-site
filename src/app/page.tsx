import { Delivery } from "@/components/Delivery";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reservations } from "@/components/Reservations";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { Story } from "@/components/Story";
import { WelcomeStrip } from "@/components/WelcomeStrip";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <WelcomeStrip />
        <Story />
        <Menu />
        <Delivery />
        <Reservations />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

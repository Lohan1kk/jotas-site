import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoHours } from "@/components/InfoHours";
import { Menu } from "@/components/Menu";
import { Reservations } from "@/components/Reservations";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { Visit } from "@/components/Visit";
import { VisualBanner } from "@/components/VisualBanner";
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
        <InfoHours />
        <VisualBanner />
        <Menu />
        <Visit />
        <Reservations />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

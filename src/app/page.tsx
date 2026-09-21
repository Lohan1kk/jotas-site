import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reservations } from "@/components/Reservations";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Menu />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}

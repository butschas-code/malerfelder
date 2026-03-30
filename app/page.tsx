import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { ServicesApple } from "@/components/sections/ServicesApple";
import { Process } from "@/components/sections/Process";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HOME } from "@/lib/data/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: HOME.meta.title,
  description: HOME.meta.description,
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <ServicesApple />
        <Process />
        <AboutPreview />
        <ContactCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

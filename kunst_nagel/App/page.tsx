import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f2f1]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PhilosophySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center mt-20">
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/2988833892/2564652688.jpeg"
          alt="Nail Salon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="relative z-10 text-center px-8">
        <h1 className="text-6xl font-light tracking-wider text-[#374349] mb-8">
          KUNST<br />NAGELSTUDIO
        </h1>
        <p className="text-xl text-[#374349] mb-8 max-w-2xl mx-auto">
          Entfalte Deine Schönheit – mit<br />gepflegten Nägeln aus der Natur
        </p>
        <Link
          href="#contact"
          className="inline-block bg-[#374349] text-white px-6 py-3 rounded hover:bg-[#2a3438] transition-colors"
        >
          Kontaktaufnahme
        </Link>
      </div>
    </section>
  );
}

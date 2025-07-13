"use client";

import Image from "next/image";

export function PhilosophySection() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/2988833892/1062882900.jpeg"
          alt="Nail Polish Bottles"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-8">
        <div className="max-w-2xl ml-auto bg-white/90 backdrop-blur-sm p-12 rounded">
          <h2 className="text-3xl font-light text-[#374349] mb-6">
            Unsere Nagelphilosophie
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bei uns steht die natürliche Schönheit Deiner Nägel im Mittelpunkt.
            Mit sorgfältig ausgewählten Produkten und professioneller Technik schaffen
            wir gepflegte, gesunde und strahlende Nägel – weil echte Schönheit von
            gesunder Pflege lebt. Nachhaltigkeit, Qualität und Dein Wohlbefinden
            sind dabei unsere höchste Priorität.
          </p>
        </div>
      </div>
    </section>
  );
}

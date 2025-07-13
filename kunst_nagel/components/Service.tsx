"use client";

import Image from "next/image";

const services = [
  {
    title: "Nägel",
    icon: "https://ext.same-assets.com/2988833892/2990101523.svg",
    items: [
      { name: "NATURVERSTÄRKUNG", price: "35€" },
      { name: "FRENCH PINK O. WEISS", price: "40€" },
      { name: "FABELGEL O. GLITZER", price: "40€" },
      { name: "BABYBOOMER", price: "40€" },
      { name: "FARBVERLAUF, GLITZERVERLAUF", price: "42€" },
    ],
  },
  {
    title: "Maniküre",
    icon: "https://ext.same-assets.com/2988833892/1437061956.svg",
    items: [
      { name: "MANIKÜRE (Handbad, Nägel kürzen, feilen, polieren, hornhaut entfernen und massieren)", price: "15€" },
      { name: "MANIKÜRE MIT NAGELLACK", price: "25€" },
      { name: "MANIKÜRE MIT SHELLAC – FARBE", price: "35€" },
      { name: "NUR SHELLAC – FARBE", price: "25€" },
      { name: "SHELLAC – FARBE", price: "30€" },
    ],
  },
  {
    title: "Pediküre",
    icon: "https://ext.same-assets.com/2988833892/3768254804.svg",
    items: [
      { name: "PEDIKÜRE (Fußbad, Hornhaut entfernen, feilen, peeling, massieren)", price: "30€" },
      { name: "PEDIKÜRE MIT LACK", price: "35€" },
      { name: "PEDIKÜRE MIT SHELLAC – FARBE", price: "40€" },
      { name: "PEDIKÜRE MIT SHELLAC – FRENCH", price: "42€" },
    ],
  },
  {
    title: "Wimpern",
    icon: "https://ext.same-assets.com/2988833892/4221868399.svg",
    items: [
      { name: "NEUMODELLAGE", price: "" },
      { name: "NATURLOOK", price: "60€" },
      { name: "GLAMOUR (3D – 6D)", price: "70€" },
      { name: "EXTREME LOOK (8D – 10D)", price: "70€" },
      { name: "AUFFÜLLUNG:", price: "" },
      { name: "NATUR: 1 WOCHE", price: "35€" },
      { name: "2 WOCHE", price: "45€" },
      { name: "3 WOCHE", price: "50€" },
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-3xl font-light text-[#374349] mb-4">
          Reine Pflege für Nägel
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Entdecke unsere Auswahl an natürlichen Nagelpflegeprodukten, die Deine Nägel stärken,
          pflegen und ihnen ein gesundes, strahlendes Aussehen verleihen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#374349] mb-4">{service.title}</h3>
              <div className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm">
                    <p className="text-gray-600">{item.name}</p>
                    {item.price && <p className="font-semibold text-[#374349]">{item.price}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#374349] text-white px-6 py-3 rounded mr-4 hover:bg-[#2a3438] transition-colors">
            Contact Us
          </button>
          <button className="bg-[#374349] text-white px-6 py-3 rounded hover:bg-[#2a3438] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

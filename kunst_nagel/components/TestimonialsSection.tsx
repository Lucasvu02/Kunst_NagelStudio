"use client";

const testimonials = [
  {
    name: "Anna S.",
    text: "Ich bin seit Jahren Kundin und jedes Mal begeistert von der liebevollen und professionellen Betreuung. Meine Nägel sehen nicht nur toll aus, sondern fühlen sich auch gesund an. Besonders die natürliche Nagelverstärkung hat meine Nägel deutlich gestärkt. Absolute Empfehlung!"
  },
  {
    name: "Lisa M.",
    text: "Die Maniküre hier ist einfach ein Verwöhnprogramm für die Hände. Die Mitarbeiterinnen nehmen sich Zeit, beraten ausführlich und arbeiten sehr sorgfältig. Meine French Nails halten bei mir immer mehrere Wochen ohne Absplittern. Für mich das beste Nagelstudio in der Stadt!"
  },
  {
    name: "Julia K.",
    text: "Ich liebe die Babyboomer-Technik, die hier angeboten wird. Der sanfte Farbverlauf sieht super natürlich und elegant aus. Außerdem wird bei jedem Besuch viel Wert auf Hygiene und Entspannung gelegt, sodass ich mich rundum wohlfühle."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f2f2f1]">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-light text-[#374349] text-center mb-12">
          Feedback unserer Kunden
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded shadow-sm">
              <blockquote className="text-gray-700 italic mb-4">
                "{testimonial.text}"
              </blockquote>
              <p className="text-[#374349] font-semibold text-right">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

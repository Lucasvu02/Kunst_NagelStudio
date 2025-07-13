"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-light text-[#374349] text-center mb-12">
          KUNST NAGELSTUDIO
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#374349] outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:border-[#374349] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:border-[#374349] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Write a message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 py-2 focus:border-[#374349] outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#374349] text-white px-8 py-3 rounded-full hover:bg-[#2a3438] transition-colors"
            >
              Submit
            </button>
          </form>

          <div className="space-y-4 text-gray-700">
            <p><strong>Telefone:</strong> 0152 0969 8986</p>
            <p><strong>Instagram:</strong> kunst_nagel_hann</p>
            <p>Neuer Markt 52, 42781 Haan</p>
            <div className="mt-6">
              <p><strong>MO. - Fr.:</strong> 9.30 - 19.00 Uhr</p>
              <p><strong>Sa.:</strong> 9.30 - 17.00 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

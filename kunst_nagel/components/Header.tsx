"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="bg-gray-50 py-2 text-center text-sm">
        <span className="text-gray-600">This website was built on Wix. Create yours today.</span>
        <Link href="#" className="ml-2 text-blue-500 hover:underline">Get Started</Link>
      </div>
      <nav className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-xl font-medium text-[#374349]">
          KUNST NAGELSTUDIO
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="#features" className="text-[#374349] hover:text-gray-600">Features</Link>
          <Link href="#about" className="text-[#374349] hover:text-gray-600">About</Link>
          <Link href="#contact" className="text-[#374349] hover:text-gray-600">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}

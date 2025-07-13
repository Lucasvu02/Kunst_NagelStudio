import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KUNST NAGELSTUDIO | Natürliche Nagelpflege",
  description: "Entfalte Deine Schönheit mit gepflegten Nägeln aus der Natur. Professionelle Maniküre, Pediküre und Wimpernverlängerung in Haan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <ClientBody className={montserrat.className}>{children}</ClientBody>
    </html>
  );
}

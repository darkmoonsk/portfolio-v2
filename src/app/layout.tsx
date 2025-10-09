import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/VFX/StarsBackground";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Souza's Portfolio with Space Theme",
  description:
    "This is a portfolio website for Bruno Souza, a software engineer based in Brazil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030203] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

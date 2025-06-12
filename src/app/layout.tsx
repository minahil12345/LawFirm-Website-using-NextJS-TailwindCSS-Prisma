// ✅ src/app/layout.tsx
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stonebridge Legal - Prestige Law Firm",
  description: "Official Prestige Law Firm website offering legal expertise in corporate, family, and criminal law.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

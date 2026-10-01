import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import Header from "@/components/layout/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TaskFlow | Task management for small teams",
  description:
    "TaskFlow helps small teams plan work, track progress, and get more done together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      
      <body>{children}
      <Header />
      <main>
<Footer />
        <FloatingButtons />
      </main>
        
      </body>
    </html>
  );
}
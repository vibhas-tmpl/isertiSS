
import type { Metadata } from "next";
import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Welcome to our website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

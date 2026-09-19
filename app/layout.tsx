import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adidas-pure-concept.vercel.app"),
  title: "Adidas Pure Concept — Apple-Inspired Experience",
  description: "Koleksi Adidas Pure Concept terinspirasi estetika Apple, dirancang untuk bergerak bersama Anda.",
  authors: [{ name: "Nur Hidayat Surya Pamungkas" }],
  creator: "Nur Hidayat Surya Pamungkas",
  publisher: "Nur Hidayat Surya Pamungkas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

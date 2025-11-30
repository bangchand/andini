import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ANDINI — Anti Pernikahan Dini",
  description: "Program sosialisasi ANDINI untuk mencegah pernikahan dini dengan edukasi, data, dan aksi."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

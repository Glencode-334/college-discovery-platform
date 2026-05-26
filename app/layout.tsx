import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Discover and compare colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* Shared Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
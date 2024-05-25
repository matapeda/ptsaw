import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar/Navbar";
import Footer from "./ui/Footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PTSAW",
  description: "welcome to ptsaw.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

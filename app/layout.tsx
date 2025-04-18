import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarClient from "@/components/navbar/navbarclient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grade Manager"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="html">
      <body className={inter.className}>
        <NavbarClient/>
        <div className="page">
          {children}
        </div>
      </body>
    </html>
  );
}
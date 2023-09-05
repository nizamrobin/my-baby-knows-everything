import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "আমার বাবু সব জানে!",
  description: "A product from Nizam Robin -Offbeat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

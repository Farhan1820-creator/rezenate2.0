// app/layout.tsx
import type { Metadata } from "next";
import Preloader from "@/components/Preloader";
import { Outfit, Boldonse, Mulish, Unbounded} from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit-sans",
});

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
 variable: "--font-boldonse-display"});

 const mulish = Mulish({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mulish",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Rezenate",
  description:
    "We partner with organisations and leaders to attract, assess and support exceptional leadership that creates lasting impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${boldonse.variable} ${mulish.variable} font-sans ${unbounded.variable}`}>
      <body>  
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
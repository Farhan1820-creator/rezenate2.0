// app/layout.tsx
import type { Metadata } from "next";
import Preloader from "@/components/Preloader";
import { Outfit, Boldonse, Mulish, Unbounded, Instrument_Serif, Readex_Pro, Inter} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300","400"],
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
  weight: "400",
  variable: "--font-unbounded",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
});

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["200" , "300"],
  variable: "--font-readex-pro",
});

const tartuffo = localFont({
  src: "./fonts/tartuffo/Tartuffo_Trial-LightItalic-BF643371da383c5.otf",
  variable: "--font-tartuffo",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Rezenate",
  description:
    "We partner with organisations and leaders to attract, assess and support exceptional leadership that creates lasting impact.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${boldonse.variable} ${mulish.variable} font-sans ${unbounded.variable} ${instrumentSerif.variable} ${readexPro.variable} ${tartuffo.variable} ${inter.variable}`}>
      <body>  
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
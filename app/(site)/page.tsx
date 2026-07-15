// app/(site)/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import ValuesSection from "./ValuesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesSection />
    </>
  );
}
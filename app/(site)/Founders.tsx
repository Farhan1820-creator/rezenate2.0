"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Founder {
  id: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  image: string;
}

const FOUNDERS: Founder[] = [
  {
    id: "zak",
    name: "Zak",
    role: "The Alchemist",
    quote: "““Leadership begins with honesty and not hierarchy.””",
    description:
      "Zak brings clarity to who companies are, what they stand for, and who should lead them next.",
    image: "/founders/zak.png",
  },
  {
    id: "chloe",
    name: "Chloe",
    role: "The Architect",
    quote: "““We built Rezenate to make leadership feel human again.””",
    description:
      "Chloe brings structure, psychology, and emotional intelligence to every engagement, ensuring great partnerships are built to last.",
    image: "/founders/chloe.png",
  },
];

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
        y: { duration: 0.7, ease: "easeOut", delay: index * 0.2 },
      }}
      className="relative rounded-[30px]  md:rounded-[40px] overflow-hidden w-[350px] h-[470px] md:w-[330px] md:h-[450px] lg:w-[445px] lg:h-[580px] xl:w-[490px] xl:h-[621px]  2xl:w-[542px] 2xl:h-[651px]   mix-blend-multiply shadow-[0px_4px_20px_5px_rgba(148,100,244,0.22)]  hover:shadow-[0px_4px_20px_5px_rgba(148,100,244,0.3)] cursor-pointer duration-300"
    >
      {/* Background layer — fixed, decoupled from content so it never distorts */}
      <div
        className="absolute inset-0 bg-[url('/founders/card-bg.webp')] bg-cover bg-center -z-10"
      />

      {/* Content block — Figma: 394x468, centered inside the 542x651 card */}
      <div className="relative h-full flex flex-col items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-4 px-4 lg:px-6 xl:px-8 pt-22 2xl:px-12 ">
        <div className="relative w-[120px] h-[120px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]  xl:w-[177px] xl:w-[177px] rounded-full overflow-hidden shrink-0 ">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover object-center"
          />
        </div>

        <h3
          className="font-readex-pro font-normal text-black text-center text-[24px] md:text-[22px] lg:text-[28px] xl:text-[32px]  mb-4"
          style={{ lineHeight: "90%" }}
        >
          {founder.name} — {founder.role}
        </h3>

        <p
          className="font-outfit font-normal text-black text-center text-[18px] md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] px-6 xl:px-8 2xl:px-8 "
          style={{ lineHeight: "115%" }}
        >
          {founder.quote}
        </p>

        <span className="w-[70%] h-px bg-[#9564F4]" />

        <p
          className="font-outfit font-normal text-black/80 text-center text-[16px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] md:px-6 lg:px-2 xl:px-6 2xl:px-4 tracking-normal "
          style={{ lineHeight: "130%" }}
        >
          {founder.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TheFounders() {
  return (
    <section id="founders" className="relative px-[16px] md:px-3 py-12 md:py-15 lg:py-18 xl:py-20 lg:px-4 bg-background">
      <h2 className="relative z-2 font-readex-pro text-center text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[60px] xl:mb-4">
        The <span className="font-tartuffo text-[#9564F4]">founders</span>
      </h2>
      <p
        className="relative z-2 font-outfit text-center text-black  mx-auto mb-12 lg:mb-16 text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] "
      >
        Rezenate is founder-led. We believe that leadership can be both strong and kind.
      </p>

      <div className="mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 lg:gap-14  xl:gap-18">
        {FOUNDERS.map((founder, index) => (
          <FounderCard key={founder.id} founder={founder} index={index} />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";


interface PartnerStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const PARTNER_STEPS: PartnerStep[] = [
  {
    id: "attract",
    number: "01",
    title: "Attract",
    subtitle: "We make your story magnetic.",
    description:
      "We craft a compelling narrative around your leadership needs, positioning your opportunity in a way that draws the right candidates naturally.",
  },
  {
    id: "assess",
    number: "02",
    title: "Assess",
    subtitle: "We reveal leadership truth",
    description:
      "Through structured evaluation and deep-dive interviews, we uncover a candidate's true leadership style, decision-making patterns, and cultural fit.",
  },
  {
    id: "align",
    number: "03",
    title: "Align",
    subtitle: "We create mutual clarity before commitment",
    description:
      "Before any offer is made, we ensure expectations are transparent on both sides — from compensation to vision — so the partnership starts on solid ground.",
  },
  {
    id: "anchor",
    number: "04",
    title: "Anchor",
    subtitle: "We enable new leaders to land and lead.",
    description:
      "We support onboarding and early-stage integration, helping new leaders build trust with teams quickly and start delivering impact from day one.",
  },
  {
    id: "ascend",
    number: "05",
    title: "Ascend",
    subtitle: "We extend the reach of exceptional leadership.",
    description:
      "We stay engaged beyond placement, helping leaders grow into broader roles and extend their influence across the organization over time.",
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
   
      viewBox="0 0 14 14"
      fill="none"
      className={`transition-transform duration-300 h-[16px] w-[16px] lg:h-[18px] lg:w-[18px] 2xl:h-[25px] 2xl:w-[20px] ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
      <polygon points="1,4 7,13 12,4" fill="#9564F4" />
    </svg>
  );
}

function AccordionItem({
  step,
  isOpen,
  onToggle,
}: {
  step: PartnerStep;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-[24px] border bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#9564F4]/50 shadow-[0_4px_20px_rgba(149,100,244,0.15)]"
          : "border-purple-200/60 shadow-none"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between md:justify-self-auto gap-3 md:gap-6 px-4 md:px-8 py-4 md:py-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-readex font-light text-center text-[#9564F4] shrink-0 text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[60px] leading-[114%] tracking-[-4%]"
        >
          {step.number}
        </span>

        <span className="w-px self-stretch hidden md:block bg-purple-300/50 shrink-0" />

        <span
          className="font-readex text-center md:text-left font-normal text-black capitalize shrink-0 w-24 md:w-32 lg:w-40 text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[90%]"
        >
          {step.title}
        </span>

        <span className="font-outfit font-normal text-black flex-1 hidden md:block text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-[115%]">
          {step.subtitle}
        </span>

        <span
          className={`w-7 h-7 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12  rounded-full outline-1 outline-[#e1d2ff] shadow-sm border flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen ? "border-[#9564F4] bg-[#9564F4]/10" : "border-purple-300"
          }`}
        >
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-300 ease-out ${
              isOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-2"
            }`}
          >
            <p className="font-outfit font-normal text-black px-8 pb-2 md:hidden text-[16px]">
              {step.subtitle}
            </p>
            <p className="font-outfit font-normal text-black/80 px-8 pb-6 text-[13px] md:text-[15px] lg:text-[18px] leading-[140%]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowWePartner() {
  const [openId, setOpenId] = useState<string | null>(PARTNER_STEPS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 px-4 bg-background   ">
      <div className="absolute top-0 left-0 right-0 h-[1200px] bg-[url('/hwp/background.webp')] bg-cover bg-center " />

      <h2 className=" relative z-1 font-readex-pro text-center text-[40px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[60px] mb-4">
        How We <span className="font-tartuffo text-[#9564F4]">partner</span>
      </h2>
      <p className="relative z-1 font-outfit text-center text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black max-w-full md:max-w-xl lg:max-w-3xl mx-auto mb-12 tracking-wide">
        We partner with founders and boards to introduce leaders who strengthen culture
        and build momentum without losing what makes the company human. Every engagement
        moves through five deliberate stages.
      </p>

      <div className="relative max-w-4xl md:max-w-[95%] lg:max-w-[80%] 2xl:max-w-[59%] mx-auto flex flex-col gap-5 ">
        {PARTNER_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
          >
            <AccordionItem
              step={step}
              isOpen={openId === step.id}
              onToggle={() => handleToggle(step.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}


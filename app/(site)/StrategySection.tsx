// app/(site)/StrategySection.tsx
"use client";

import StrategyLogo from "@/components/StrategyLogo";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StrategySection() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Full-width background image */}
      <img
        src="/strategy/image.png"
        alt=""
        className=" w-[400px] h-[600px] top-10 md:h-full left-36 md:w-[100%] md:left-20 lg:w-[100%] lg:left-15 xl:w-[90%] xl:left-10 2xl:w-[89%] 2xl:left-5 ml-auto object-cover relative  "
      />

      {/* Text content overlay - left side */}
      <div className="absolute inset-0 flex left-4 top-40 md:left-8 md:top-20 lg:left-12 lg:top-40 xl:left-32 xl:top-50  2xl:left-60 2xl:top-65">
        <div>
          <div className="max-w-[75%] md:max-w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-readex-pro font-medium text-black text-[26px] md:text-[31px] lg:text-[36px] xl:text-[50px] 2xl:text-[60px] leading-tighter tracking-tight"
            >
              Every Leader Influences A Culture Long Before They{" "}
              <span className="font-tartuffo italic text-[#9564F4] ">
                change a strategy.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mt-8 md:mt-8 max-w-[95%] md:max-w-[80%] lg:max-w-[60%] space-y-5 md:space-y-7 font-inter text-[18px] md:text-[18px] lg:text-[19px]  xl:text-[23px] 2xl:text-[30px] leading-[114%] text-black text-lg"
            >
              <p>Some support people <br /> to become more of themselves.</p>
              <p>Others slowly ask <br /> them to become less.</p>
              <p>Rezenate exists because <br /> leadership resonates.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Logo animation - white variant, right side */}
      <div className="absolute top-1/2 right-[28%] -translate-y-1/2 hidden lg:block">
        <StrategyLogo color="white" />
      </div>

      {/* Blurred quote card */}
      {/* Blurred quote card */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  className="absolute w-[150px] md:w-[210px] md:bottom-[5%] md:right-[10.3%] lg:w-[250px] lg:bottom-[17%] lg:right-[18.7%] xl:w-[320px] xl:bottom-[17%] xl:right-[18.7%]  2xl:w-[440px] 2xl:bottom-[17%] 2xl:right-[19.3%]"
>
  <div className="relative w-full">
    <Image
      src="/strategy/blur-box.png"
      alt="Quote card"
      width={440}
      height={300}
      className="w-full h-auto md:rounded-[18px] lg:rounded-[25px] xl:rounded-[35px] 2xl:rounded-[38px] relative"
    />

    <div className="absolute inset-0 flex flex-col justify-center px-2 py-4 md:px-3 md:py-5 lg:px-4 xl:px-6 xl:py-2 2xl:px-8 2xl:py-6">
      <p className="font-outfit text-white text-[10px] md:text-[12px]  lg:text-[14px]  xl:text-[20px] 2xl:text-[27.23px] xl:leading-[100%] 2xl:leading-[105%]">
        People buy into the leader before they buy into the vision.
      </p>
      <p className="md:mt-1 lg:mt-2 xl:mt-3 font-outfit font-semibold text-[27.23px] md:text-[10px] lg:text-[12px] xl:text-[18.23px] 2xl:text-[27.23px] text-white text-sm tracking-wide">
        — JOHN C MAXWELL
      </p>
    </div>
  </div>
</motion.div>
    </section>
  );
}
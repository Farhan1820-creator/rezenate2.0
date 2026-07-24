"use client";

import LeadWayLogo from "@/components/LeadWayLogo";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadTheWayCTA() {
  return (
<section className="scroll-mt-[15vh] relative overflow-hidden pt-12 md:pt-15 xl:pt-20 h-[60vh] md:h-[75vh] lg:h-[100vh] flex flex-col items-center bg-[url('/LTW/bg-image.webp')] bg-cover bg-center bg-background ">

  <div className="flex-1 flex flex-col items-center justify-center">

      {/* Layer 1: Logo */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: [60, -10, 0] }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          opacity: { duration: 0.4, ease: "easeOut" },
          y: { duration: 0.9, times: [0, 0.6, 1], ease: ["easeOut", "easeInOut"] },
        }}
        className="absolute z-9 mb-[-39] md:mb-10 "
      >
        <LeadWayLogo/>
      </motion.div>

      {/* Layer 2: Blurred card image + Layer 3: Text on top */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: [60, -10, 0] }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          opacity: { duration: 0.4, ease: "easeOut", delay: 0.1 },
          y: { duration: 0.9, times: [0, 0.6, 1], ease: ["easeOut", "easeInOut"], delay: 0.1 },
        }}
        className="relative z-10 h-[200px] w-[360px] md:h-[200px] md:w-[625px] lg:h-[230px] lg:w-[718px] xl:h-[320px] xl:w-[1000px] 2xl:h-[350px] 2xl:w-[1083px] mx-auto flex flex-col items-center justify-center text-center px-5 sm:px-10 rounded-[20px] md:rounded-[24px] lg:rounded-[28px] xl:rounded-[35px] 2xl:rounded-[36.50px]"
        style={{
          backgroundImage: "url('/LTW/foreground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className="relative z-10 font-readex-pro font-light text-white text-[28px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] leading-[114%] tracking-[-0.04em] "
               >
          Lead The <span className="font-tartuffo italic">way.</span>
        </h2>

        <p
          className="relative z-10 font-outfit font-extralight text-white mt-4 max-w-[100%] sm:max-w-[75%] text-[15px] lg:text-[16px] xl:text-[22px] 2xl:text-[24px] leading-[115%]"
        
        >
          10% of every retainer supports a cause our clients care about.
          <br />
          We also make a matching donation to a charity chosen by their new
          leader, because good business should always leave the world
          better than it found it.
        </p>
      </motion.div>
  </div>

        <footer className="relative bottom-0 w-full bg-[#8B5CF6] py-4 mt-auto flex items-center justify-center">
    <p className="text-center font-outfit font-normal text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-white ">
      © Rezenate 2026. All rights reserved.
    </p>
  </footer>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadershipCTA() {
  return (
    <section className="relative overflow-hidden h-[60vh] md:h-[60vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[120vh]   py-0 flex items-center md:justify-auto justify-center bg-[url('/leadership/bg-image3.webp')] bg-cover bg-center   md:bg-cover md:bg-top bg-background">

      {/* Foreground — rotated flower shape, top-right */}
      <div className="absolute z-0 top-[-250px]   md:right-[0]  lg:right-[-55] xl:right-0 2xl:right-[0px]  md:h-[790px]  md:w-[160px] lg:h-[1000px] lg:w-[480px]  xl:h-[1100px] xl:w-[650px]  2xl:h-[1309px] 2xl:w-[800px]">
        <Image
          src="/leadership/fg-image.webp"
          alt=""
          fill
          className="object-cover object-center "
        />
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-[-40vh] md:bottom-[-40vh] lg:bottom-[-54vh] xl:bottom-[-67vh] 2xl:bottom-[-75vh] left-0 right-0 z-1   h-full pointer-events-none">
        <Image
          src="/leadership/bottom.webp"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative auto-width px-[16px] md:px-3 md:pt-0 lg:pt-10 xl:pt-20  z-10 flex flex-col items-center jusify-center md:justify-auto gap-6 text-center w-full overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-readex-pro font-light text-black capitalize text-[32px] md:text-[38px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] md:px-[100px] lg:px-[150px] xl:px-[240px]      "
          style={{ lineHeight: "114%" }}
        >
          Leadership shapes the way people experience work and{" "}
          <span className="font-tartuffo italic text-[#9564F4] normal-case">
            therefore life.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="font-outfit font-normal text-black text-[20px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] md:px-[190px] lg:px-[280px] xl:px-[380px] 2xl:px-[460px]  "
          style={{ lineHeight: "130%" }}
        >
          If this resonates, let&apos;s have a conversation.
          We reply within a day — always personally.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="font-outfit font-normal text-black text-[18px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] border border-black rounded-full px-8 py-3 hover:bg-black/5 transition-colors mt-4 md:mt-0"
          style={{ lineHeight: "115%" }}
        >
          Start a Private Conversation
        </motion.button>
      </div>
    </section>
  );
}
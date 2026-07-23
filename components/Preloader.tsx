// components/Preloader.tsx
"use client";
import Logo from "./Logo";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [percent, setPercent] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    const duration = 3500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(next);
      if (next >= 100) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      const revealTimer = setTimeout(() => setRevealing(true), 300);
      const removeTimer = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = "auto";
      }, 300 + 500);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [percent]);

  // circular spinner progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <>
      {!hidden && (
        <div className="fixed inset-0 z-[100] bg-[url('/preloader/background.webp')] bg-cover bg-center flex items-center justify-center overflow-hidden bg-[#efe2fc]">
          {!revealing && (
            <div className="relative flex flex-col items-center justify-center">
              {/* Rotating flower petals */}
              <div className="absolute w-[550px] h-[550px] md:w-[980px] md:h-[980px] lg:w-[1080px] lg:h-[1080px] xl:w-[1100px] xl:h-[1100px] 2xl:w-[1280px] 2xl:h-[1280px] animate-[spin_12s_linear_infinite]">
                <Image
                  src="/preloader/spinner.webp"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Static content on top of flower */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <Logo />

                <h1
                  className="font-readex-pro font-extralight text-black text-center mt-4 md:mt-8 text-[33px]  md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] leading-[114%] tracking-tight"
                >
                  Lead The <span className="font-tartuffo italic text-[#9564F4]">way</span>
                </h1>

                <p
                  className="font-outfit font-normal text-black text-center text-[13px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] "
                
                >
                  Leadership that resonates. Impact that lasts.
                </p>

                {/* Circular spinner synced to percent */}
                <svg  viewBox="0 0 48 48" className="  mt-4 2xl:mt-9 -rotate-90 w-[50px] h-[50px] md:w-[63px] md:h-[63px] lg:w-[68px] lg:h-[68px] 2xl:w-[75px] 2xl:h-[75px]">
                  <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#E5DBFB"
                    strokeWidth="4"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="#9564F4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 35ms linear" }}
                  />
                </svg>
                <span className="font-outfit text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-black/70 ">Loading</span>
              </div>
            </div>
          )}

          {revealing && (
            <div className="w-16 h-16 rounded-full bg-[#9564F4] scale-[1] animate-square-zoom z-10" />
          )}
        </div>
      )}
      {children}
    </>
  );
}
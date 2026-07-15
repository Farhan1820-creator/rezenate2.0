// app/(site)/ValuesSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { values } from "./values";
import ValueCard from "./ValueCard";

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="next-section" className=" relative   py-15 md:py-24   w-full flex flex-col items-center justify-center bg-[url('/value/background.webp')] bg-cover bg-center ">
              <h2 className=" 
              md:text-[30px] 
              lg:text-[38px]
              text-center
              max-w-[80%]  
              md:max-w-[90%] 
              lg:max-w-[75%] 
              xl:max-w-[60%] 
              2xl:max-w-[40%]
              mx-auto 
              mb-4
              md:mb-0
              font-boldonse 
              leading-[151.8%]  ">
        The way we work should reflect the way we live.
      </h2>
      <div className=" relative auto-width flex  items-center justify-center ">

<div className=" relative w-[1000px]  overflow-hidden " >
  {/* sphere - foreground layer */}
  <img
    src="/value/foreground.webp"
    alt=""
   
  />
</div>

         <div className="relative flex flex-col w-1/3 md:w-1/2">
  <div className="relative  right-[90%]  md:top-2 md:right-[37] lg:bottom-1 lg:right-[53] xl:right-[70]">
    <ValueCard item={values[0]} /> {/* Meraki */}
  </div>
  <div className="relative top-2 right-[105%]   md:top-6 md:right-[80] lg:top-7 lg:right-[120] xl:right-[140]">
    <ValueCard item={values[1]} /> {/* Wisdom */}
  </div>
  <div className="relative right-[90%]  top-4 md:top-10 md:right-[37] lg:top-14 lg:right-[53] xl:right-[70]">
    <ValueCard item={values[2]} /> {/* Upekkha */}
  </div>
  <div className="relative right-[178%]  top-8 md:top-20 md:right-[107%] lg:top-33 lg:right-[112%] xl:right-[120%] 2xl:right-[110%]">
    <ValueCard item={values[3]} /> {/* Cadence */}
  </div>
</div>
        </div>
    </section>
  );
}
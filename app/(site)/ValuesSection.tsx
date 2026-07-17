"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { values } from "./values";
import ValueCard from "./ValueCard";

const cardVariants = {
  hiddenRight: { opacity: 0, x: 100 },
  hiddenLeft: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

// Subscribe to matchMedia changes
function subscribe(callback: () => void) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function getServerSnapshot() {
  return false; // SSR default — matches client's first paint until hydration
}

export default function ValuesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
      { threshold: 0.5}
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitial = (index: number) => {
    if (!isDesktop) return false;
    return index === 3 ? "hiddenLeft" : "hiddenRight";
  };

  return (
    <section
      ref={ref}
      id="next-section"
      className="relative  py-15 lg:py-18 xl:py-20 md:pb-25 lg:pb-35 xl:pb-40 2xl:pb-50 w-full flex flex-col items-center justify-center bg-[url('/value/background.png')] bg-cover bg-top-left bg-white"
    >
      <h2 className="text-[22px] md:text-[30px] lg:text-[38px] text-center max-w-[95%] md:max-w-[90%] lg:max-w-[75%] xl:max-w-[60%] 2xl:max-w-[40%] mx-auto mb-4 md:mb-0 lg:mb-15 xl:mb-19 font-boldonse leading-[151.8%]">
        The way we work should reflect the way we live.
      </h2>

      <div className="sm:relative auto-width flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:relative md:right-8 lg:right-0 lg:left-7 xl:left-7 2xl:left-8 scale-[0.92] md:scale-[0.87] lg:scale-[1.08] xl:scale-[1.1] overflow-hidden">
          <img src="/value/foreground.webp" alt="" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full sm:relative md:w-1/3 md:items-stretch md:justify-start lg:w-1/2">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={getInitial(index)}
              animate={visible ? "visible" : getInitial(index)}
              variants={cardVariants}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={
                index === 0
                  ? "sm:relative right-[90%] md:right-[103]  md:top-4  lg:top-2   lg:right-[6] xl:top-8 xl:right-[15] 2xl:right-[11] 2xl:top-2"
                  : index === 1
                  ? "sm:relative top-2 right-[105%] md:top-5 md:right-[133] lg:top-4 lg:right-[60] xl:top-12 xl:right-[82] 2xl:top-5 2xl:right-[70]"
                  : index === 2
                  ? "sm:relative right-[90%] top-4 md:top-6 md:right-[103] lg:top-6 lg:right-[6] xl:right-[11] xl:top-16 2xl:right-[11] 2xl:top-8"
                  : "sm:relative right-[178%] top-8 md:top-18 md:right-[187%] lg:top-20 lg:right-[101%] xl:right-[101%] 2xl:right-[101%] 2xl:top-35 "
              }
            >
              <ValueCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
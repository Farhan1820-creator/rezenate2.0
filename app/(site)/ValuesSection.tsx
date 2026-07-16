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
      className="relative py-15 md:py-24 w-full flex flex-col items-center justify-center bg-[url('/value/background.webp')] bg-cover bg-center"
    >
      <h2 className="text-[22px] md:text-[30px] lg:text-[38px] text-center max-w-[95%] md:max-w-[90%] lg:max-w-[75%] xl:max-w-[60%] 2xl:max-w-[40%] mx-auto mb-4 md:mb-0 lg:mb-5 xl:mb-0 font-boldonse leading-[151.8%]">
        The way we work should reflect the way we live.
      </h2>

      <div className="sm:relative auto-width flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:relative md:right-8 lg:right-0 lg:left-3 xl:left-2 2xl:left-0 scale-[0.92] md:scale-[0.87] lg:scale-[1.09] xl:scale-[1.06] overflow-hidden">
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
                  ? "sm:relative right-[90%] md:right-[103] md:bottom-0 md:top-4 lg:bottom-0 lg:top-8 xl:bottom-0  xl:top-8 2xl:top-5 lg:right-[19] xl:right-[42] 2xl:right-[50]"
                  : index === 1
                  ? "sm:relative top-2 right-[105%] md:top-5 md:right-[133] lg:top-12 lg:right-[82] xl:top-12 xl:right-[97] 2xl:top-11 2xl:right-[115]"
                  : index === 2
                  ? "sm:relative right-[90%] top-4 md:top-6 md:right-[103] lg:top-16 lg:right-[19] xl:right-[42] xl:top-16 2xl:right-[50] 2xl:top-16"
                  : "sm:relative right-[178%] top-8 md:top-18 md:right-[187%] lg:top-20 lg:right-[101%] xl:right-[101%] 2xl:right-[101%] 2xl:top-25 "
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
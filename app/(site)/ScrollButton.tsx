"use client";
// app/(site)/ScrollButton.tsx
import Image from "next/image";


export default function ScrollButton() {
  return (
    <button
      onClick={() => {
        document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="relative w-[105px] h-[105px] md:w-[110px] lg:w-[150px] md:h-[167px] xl:w[200px] xl:h-[200px]  flex flex-col items-center justify-center group cursor-pointer"
      aria-label="Scroll to explore"
    >
      {/* Background image: circle + curved "SCROLL TO EXPLORE" text */}
    <Image
  src="/hero/scroll-badge.png"
  alt=""
  fill
  sizes="(max-width: 768px) 105px, 165px"
  className="object-contain"
/>

      {/* Arrow on top */}
<svg
  viewBox="0 0 18 43"
  fill="none"
  className="relative w-[14px] h-[38px] md:w-[18px] md:h-[43px] animate-[scrollBounce_1.6s_ease-in-out_infinite] group-hover:[animation-play-state:paused] group-hover:translate-y-1 transition-transform"
>
        <path
          d="M8.66016 42.5L17.3204 27.5L-9.75728e-05 27.5L8.66016 42.5ZM10.1602 1.5C10.1602 0.671574 9.48859 3.62117e-08 8.66016 0C7.83173 -3.62117e-08 7.16016 0.671574 7.16016 1.5L8.66016 1.5L10.1602 1.5ZM8.66016 29L10.1602 29L10.1602 1.5L8.66016 1.5L7.16016 1.5L7.16016 29L8.66016 29Z"
          fill="#9564F4"
        />
      </svg>
    </button>
  );
}
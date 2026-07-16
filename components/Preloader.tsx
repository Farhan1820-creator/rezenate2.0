// components/Preloader.tsx
"use client";
import PreloaderLogo from "./PreloaderLogo";

import { useEffect, useState } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [percent, setPercent] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

const interval = setInterval(() => {
  setPercent((prev) => {
    if (prev >= 100) {
      clearInterval(interval);
      return 100;
    }
    return prev + 1;
  });
}, 35); // 35ms * 100 = 3500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      const revealTimer = setTimeout(() => setRevealing(true), 300); // brief hold at 100%
      const removeTimer = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = "auto";
      }, 300 + 500); // matches square zoom duration below

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [percent]);

  return (
    <>
      {!hidden && (
        <div className="fixed inset-0 z-[100] bg-white bg-[url('/preloader/loader-bg.webp')] bg-cover bg-center flex items-center justify-center overflow-hidden">
{!revealing && <PreloaderLogo />}

          {revealing && (
            <div
              className="w-16 h-16 rounded-full bg-[#9564F4] scale-[1] animate-square-zoom z-10 "
            />
          )}

          <div className="absolute bottom-10 left-10 sm:bottom-14 sm:left-14 text-6xl sm:text-8xl font-unbounded font-bold text-black">
            {percent}%
          </div>
        </div>
      )}
      {children}
    </>
  );
}
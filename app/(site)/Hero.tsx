// app/(site)/Hero.tsx
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center  pt-50 lg:pt-55 xl:pt-60 text-center overflow-hidden bg-[url('/hero/background.webp')] bg-cover bg-center  h-[103vh] md:h-[87vh] lg:h-[105vh] xl:h-[130vh] 2xl:h-[143vh]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 auto-width relative z-10">
        <h1
          className="animate-blur-reveal  font-boldonse max-w-[97%] md:max-w-[93%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[88%] text-[23px] sm:text-2xl md:text-[28px] lg:text-[35px] xl:text-[40px] 2xl:text-[44px] md:leading-[182.2%] text-center"
          style={{ animationDelay: "5000ms" }}
        >
          Every leader influences a culture long before they change a strategy.
        </h1>
        <p
          className="animate-blur-reveal mt-3 lg:mt-4  max-w-[80%] md:max-w-[79%] lg:max-w-[63%] xl:max-w-[60%] 2xl:max-w-[65%]  text-center font-outfit text-[18px] sm:text-base md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[115%]"
          style={{ animationDelay: "5200ms" }}
        >
          We partner with organisations and leaders to attract, assess and support exceptional leadership that creates lasting impact.
        </p>
      </div>

      <img
        src="/hero/foreground-new.png"
        alt=""
        className="absolute bottom-0 w-full object-cover object-top  hidden md:block"
      />
      <img
        src="/hero/mobile-foreground.webp"
        alt=""
        className="absolute bottom-0 w-full object-cover object-top md:hidden h-[590px]"
      />

      <div className="absolute bottom-5  md:-bottom-2 lg:bottom-0 xl:bottom-2 hidden md:flex z-10 left-1/2 -translate-x-1/2">
        <ScrollButton />
      </div>
    </section>
  );
}
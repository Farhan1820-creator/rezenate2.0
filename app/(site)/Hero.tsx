// app/(site)/Hero.tsx
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center  pt-50 xl:pt-60 text-center overflow-hidden bg-[url('/hero/background.webp')] bg-cover bg-center  h-[101vh] md:h-[125vh] lg:h-[112vh] xl:h-[131vh]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 auto-width relative z-10">
        <h1
          className="animate-blur-reveal  font-boldonse md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] text-xl sm:text-2xl md:text-[39px] lg:text-[40px] xl:text-[44px] leading-[182.2%] text-center"
          style={{ animationDelay: "5100ms" }}
        >
          Every leader influences a culture long before they change a strategy.
        </h1>
        <p
          className="animate-blur-reveal mt-3 sm:mt-4 md:max-w-[68%] lg:max-w-[73%] xl:max-w-[78%] text-muted-foreground text-center font-outfit text-sm sm:text-base md:text-[20px] lg:text-[22px] xl:text-[24px]"
          style={{ animationDelay: "5300ms" }}
        >
          We partner with organisations and leaders to attract, assess and support exceptional leadership that creates lasting impact.
        </p>
      </div>

      <img
        src="/hero/foreground.webp"
        alt=""
        className="absolute bottom-0 w-full object-cover object-top hidden md:block"
      />
      <img
        src="/hero/mobile-foreground.webp"
        alt=""
        className="absolute bottom-0 w-full object-cover object-top md:hidden h-[590px]"
      />

      <div className="absolute bottom-2 sm:bottom-0 z-10">
        <ScrollButton />
      </div>
    </section>
  );
}
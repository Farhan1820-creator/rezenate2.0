// app/(site)/Hero.tsx
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
  <section id="home" className="relative flex flex-col items-center pt-44 lg:pt-45 xl:pt-45 text-center overflow-hidden bg-[url('/hero/background.webp')] bg-cover bg-center  h-[100vh] md:h-[116vh] lg:h-[115vh] xl:h-[125vh] 2xl:h-[127vh]">
      

      
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 auto-width relative z-10 ">
        <h1
          className="animate-blur-reveal  font-readex-pro  font-extralight max-w-[97%] md:max-w-[93%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[88%] tracking-tight leading-[102%] md:leading-[108.2%] text-center text-[40px] sm:text-2xl md:text-[60px] lg:text-[75px] xl:text-[80px] 2xl:text-[94px]"
          style={{ animationDelay: "5000ms" }}
        >
          Leadership 
          <br />
           Changes 
          <span className="font-tartuffo italic  text-[#9564F4]"> everything.</span>
        </h1>
        <p
          className="animate-blur-reveal mt-3 lg:mt-6  max-w-[75%] md:max-w-[60%] lg:max-w-[57%] xl:max-w-[50%] 2xl:max-w-[45%]  text-center font-outfit text-[14px]  sm:text-base md:text-[17px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] leading-[115%]"
          style={{ animationDelay: "5200ms" }}
        >
          We partner with organisations and leaders to attract,
           assess and support exceptional leadership 
           that creates lasting impact.
        </p>
      </div>

  {/* Foreground shape */}
<img
  src="/hero/foreground-final.png"
  alt=""
  className="absolute bottom-65 lg:bottom-24 xl:bottom-0 md:left-15 lg:left-12 xl:left-32 2xl:left-14 lg:w-[2400px] lg:h-[700px] md:scale-[2.6] lg:scale-[1.4] xl:scale-[1]  xl:w-[1280px] xl:h-[980px]  2xl:w-[2237px] 2xl:h-[1131px] object-cover object-top hidden md:block z-0 pointer-events-none"
/>

{/* Overlay - same position/size as foreground, sits directly above it */}
<img
  src="/hero/overlay-final.png"
  alt=""
  className="absolute md:bottom-[-250] lg:bottom-[-350] xl:bottom-[-260] 2xl:bottom-[-230] lg:w-[2000px] lg:h-[600px] xl:w-[2282px]  xl:h-[650px] 2xl:w-[2382px] 2xl:h-[665px] left-1/2 -translate-x-1/2  object-cover object-top hidden md:block z-[1] pointer-events-none"
/>

<img
  src="/hero/mobile-foreground.png"
  alt=""
  className="absolute bottom-0 w-full object-cover object-top md:hidden h-[590px] z-0"
/>

      <div className="absolute bottom-5  md:bottom-2 lg:bottom-0 xl:bottom-2 2xl:bottom-15 hidden md:flex z-10 left-1/2 -translate-x-1/2">
        <ScrollButton />
      </div>
    </section>
  );
}
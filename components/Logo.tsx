// components/Logo.tsx
export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="none"
        className="w-[20px] h-[20px] sm:w-[36px] sm:h-[36px]"
      >
        <path
          className="animate-logo-path-1"
          d="M34.5725 1.90735e-06H0C5.60924 5.64344 13.2376 8.81678 21.1944 8.81678H25.5419V12.8243C25.5419 21.0015 28.7903 28.8438 34.5725 34.6259V1.90735e-06Z"
          fill="#9564F4"
        />
        <path
          className="animate-logo-path-2"
          d="M22.1234 12.3969H0.0546875L5.77316 18.1154C7.75697 20.0992 10.4476 21.2137 13.2531 21.2137C13.2531 24.0877 14.3948 26.8439 16.427 28.8761L22.1234 34.5725V12.3969Z"
          fill="#9564F4"
        />
        <path
          className="animate-logo-path-3"
          d="M9.77861 34.5725V24.7939H0L9.77861 34.5725Z"
          fill="#9564F4"
        />
      </svg>
      <span className="font-bold tracking-wide text-lg leading-none">
       <img className="h-4 sm:h-6 lg:h-7" src="/rezenate.webp" alt="" />
      </span>
    </div>
  );
}
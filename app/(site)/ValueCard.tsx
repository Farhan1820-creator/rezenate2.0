// app/(site)/ValueCard.tsx
import Image from "next/image";
import { ValueItem } from "./values";

export default function ValueCard({ item }: { item: ValueItem }) {
  return (
<div className="relative rounded-[20px] border border-purple-200 w-[220px] h-[60px] md:w-[325px] md:h-[75px] lg:w-[420px] lg:h-[98px]  xl:w-[500px] xl:h-[120px]  2xl:w-[650px] 2xl:h-[130px] p-5 flex items-center gap-4 bg-white 
group  transition-all duration-300 ease-out  hover:border-[#9564F4]/20 hover:shadow-[0_8px_30px_rgba(149,100,244,0.12)] rounded-xl">      
<div className=" shrink-0 flex items-center justify-center overflow-hidden w-[32px] md:w-[39px] lg:w-[50px] xl:w-[68px]">
        <img src={item.icon} alt="" />
      </div>
          <div className="absolute top-3  right-3 md:top-4 md:right-4 xl:top-5 xl:right-4 text-purple-500 text-[9px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-mulish">{item.number}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className= "text-[10px] md:text-[12px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px] font-boldonse xl:leading-[152%]">{item.title}</h3>
        </div>
        {item.description && (
          <p className=" text-muted-foreground text-[8px] md:text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-mulish md:leading-6">{item.description}</p>
        )}
      </div>
    </div>
  );
}
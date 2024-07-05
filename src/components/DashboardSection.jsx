import Image from "next/image";
import React from "react";
import Dial from "./icons/Dial";
import Music2 from "./icons/Music-2";
import Music3 from "./icons/Music-3";
import Music4 from "./icons/Music-4";

function DashboardSection() {
  return (
    <div className="bg-[#010625] px-[76px] py-[120px] relative h-[1200px]">
      <div className="flex justify-between">
        <div className="w-[585px] h-[78px]  top-[45px]">
          <p className="text-[36px] font-[400px]">
            ELEVATE YOUR MUSIC <br /> CAREER WITH US
          </p>
        </div>
        <div className="top-[130px] right-[80px]">
          <Dial />
        </div>
      </div>
      <div className="rounded-[23px] flex justify-center pt-2 absolute top-[204px] left-[170px]">
        <Image src="/hero/dashboard.webp" width={1155} height={817} />
      </div>
      <div>
        <div className="absolute left-[1015.91px] top-[100px]">
        <Music4 />
        </div>
        <div className="absolute bottom-[450px]">
        <Music2 />
        </div>
        <div className="absolute bottom-[90px] right-[100px]">
        <Music3 />
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;

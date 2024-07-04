import React from "react";
import Header from "./Header";
import Image from "next/image";
import Email from "./icons/Email";
import Circle from "./icons/Circle";
import Music1 from "./icons/Music-1";
import Music2 from "./icons/Music-2";
import Music3 from "./icons/Music-3";
import Music4 from "./icons/Music-4";
import Music5 from "./icons/Music-5";
import Line from "./icons/Line";

function HeroSection() {
  return (
    <div className="bg-hero w-full h-[900px] px-[76px] py-[40px]">
      <Header />
      <div className="flex pt-[160px] pb-[100px] justify-between">
        <div>
          <div>
            <p className="text-[62px]">Monetize Your Talents</p>
            <div className="flex">
              <p className="text-[62px]">Let's Join Forces</p>
              <div className="flex items-center ml-2">
                <Image src="/hero/round.webp" width={105} height={52.5} />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[22px] font-[400px]">Music Contests: Where Fun Meets Fame!</p>
          </div>

          <div className="flex border-[0.5px] border-slate-400 w-[589px] h-[70px] bg-[#191E3E] rounded-full items-center justify-between mt-8">
            <div className="flex ml-2">
            <Email />
            <p className="text-slate-400 font-medium ml-2">EMAIL ADDRESS</p>
            </div>
            <div className="bg-blue-700 w-[200px] rounded-full h-[70px]  flex items-center justify-center font-semibold">GET STARTED</div>
          </div>

          <div className="mt-8">
            <Circle />
          </div>
        </div>

        <div className="relative">
          <Image src="/hero/bgImage.webp" width={460} height={572} />
          <div className="absolute left-[-40px] top-0"><Music1 /></div>
          <div className="absolute left-[-40px] top-[40%]"><Music2 /></div>
          <div className="absolute left-[-40px] top-[85%]"><Music3 /></div>
          <div className="absolute left-[330px] top-[-40px]"><Music4 /></div>
          <div className="absolute left-[380px] top-[65%]"><Music5 /></div>
          <div className="absolute right-[200px] top-[63%]">
          <Line />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

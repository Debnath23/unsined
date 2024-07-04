import Image from "next/image";
import React from "react";

function CreaterSection() {
  return (
    <div className="bg-[#010625] h-[373px] flex">
      <div className="h-[308px] pt-[84px] pl-[36px]">
        <Image src="/hero/music.webp" alt="music" width={795} height={314} />
      </div>
      <div>
        <div className="font-600 flex pt-8">
          <div className="text-[45px] mr-4">
            <p>
              Active Creators <br /> and Participants
            </p>
          </div>
          <div className="text-[111px]">
            <p>873K</p>
          </div>
        </div>
        <div className="w-auto border h-[1px] text-white"></div>

        <div className="flex pt-12 justify-between">
          <div className="flex relative items-center">
            <div className="absolute">
              <Image
                src="/hero/avatar.jpeg"
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <div className="absolute left-10">
              <Image
                src="/hero/avatar.jpeg"
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <div className="absolute left-20 bg-white rounded-full w-[56px] h-[56px] flex justify-center items-center">
              <Image src="/hero/plus.png" width={24} height={24} />
            </div>

            <div className="pl-[160px]">
              <p>Join Them</p>
              <div className="w-auto border h-[1px] text-white"></div>
            </div>
          </div>
          <div>
            <p className="text-[16px] font-[400px]">The number of active podcasts and <br /> their quality is constantly growing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreaterSection;

import Image from "next/image";
import React from "react";

function CreateWinSection() {
  return (
    <div className="bg-wave px-[76px] py-[100px]">
      <div className="flex relative">
        <div>
          <p className="text-[100px] font-bold w-[1235.46px]">
            Create and Win <br /> Prizes with your music
          </p>
        </div>
        <div className="flex absolute left-[57%] top-6">
          <div className="flex items-end relative">
            <div className="w-[107px] h-[107px] border-[1px] border-slate-400 bg-slate-300 rounded-full flex justify-center items-center">
              <Image src="/hero/mic.png" width={41} height={52} />
            </div>
            <div className="w-[46px] h-[46px] border-[1px] border-slate-400 bg-slate-100 rounded-full flex justify-center items-center absolute left-20 bottom-2">
              <Image src="/hero/arrow.png" width={18} height={18} />
            </div>
          </div>
          <div className="pl-8 flex items-center">
            <p className="text-[20px] font-[400px]">Join for free</p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <p className="text-[20px] font-[400px]">
          Distribute your Music to the most popular Platform, including
          Facebook, Twitter, Youtube with just a simple steps and get a <br />{" "}
          chance to win big prizes!
        </p>
      </div>
      <div className="flex justify-between py-6">
        <div className="flex">
          <div className="flex bg-white w-[193px] h-[59px] rounded-full justify-center items-center gap-2">
            <p className="text-[16px] font-[600px] text-black">Get Started</p>
            <Image src="/hero/arrow-2.png" width={20} height={20} />
          </div>
          <div>
            <div className="flex bg-slate-400 w-[193px] h-[59px] rounded-full justify-center items-center gap-2 border-[1px] border-slate-50">
              <p className="text-[16px] font-[600px] text-white">
                Create Your Music
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-10">
          <p className="text-[14.55px] font-[400px]">Scroll Down</p>
          <div className="w-[48px] h-[48px] border-[1px] border-slate-400 bg-slate-100 rounded-full flex justify-center items-center">
            <Image src="/hero/arrow-3.png" width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWinSection;

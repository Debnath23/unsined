import React from "react";
import Dial from "./icons/Dial";
import Image from "next/image";
import Star from "./icons/Star";

function ParticipationSection() {
  return (
    <>
      <div className="w-auto border h-[1px] text-slate-500"></div>
      <div className="bg-[#010625] pt-16 pb-[226px] pl-[145px] pr-12">
        <div className="flex justify-between pb-12">
          <div>
            <p className="text-[114px] font-[700px] text-[#65BEFF]">
              Participate to WIN
            </p>
            <p className="text-[20px] font-[400px] pt-[40px]">
              Distribute Your Music To The Most Popular Platform, Including
              Facebook, Twitter, Youtube With <br /> Just A Simple Steps And Get
              A Chance To Win Big Prizes!
            </p>
          </div>
          <div>
            <Dial />
          </div>
        </div>

        <div className="flex justify-between h-[136px] py-[25px] items-center">
          <div className="flex items-center">
            <div className="border border-slate-200 rounded-full px-2 w-[52px] h-[38px] flex items-center">
              <p className="text-[20px]">01/</p>
            </div>
            <div className="pl-6">
              <Image
                src="/hero/avatar.jpeg"
                alt="avatar"
                width={48}
                height={4}
                className="rounded-full"
              />
            </div>
            <div className="pl-6 flex items-center">
              <p className="text-[68px] font-[400px] text-[#85889E]">
                Desirae Vaccaro
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <Star />
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">$15,500</p>
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">2 Wins</p>
            </div>
          </div>
        </div>
        <div className="w-auto border h-[1px] text-slate-500"></div>

        <div className="flex justify-between h-[136px] py-[25px] items-center pl-14">
          <div className="flex items-center">
            <div className="border border-slate-200 rounded-full px-2 w-[52px] h-[38px] flex items-center">
              <p className="text-[20px]">02/</p>
            </div>
            <div className="pl-6">
              <Image
                src="/hero/avatar.jpeg"
                alt="avatar"
                width={48}
                height={4}
                className="rounded-full"
              />
            </div>
            <div className="pl-6 flex items-center">
              <p className="text-[68px] font-[400px] text-white">Angel Bator</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <Star />
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">$15,500</p>
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">2 Wins</p>
            </div>
          </div>
        </div>
        <div className="w-auto border h-[1px] text-slate-500"></div>

        <div className="flex justify-between h-[136px] py-[25px] items-center">
          <div className="flex items-center">
            <div className="border border-slate-200 rounded-full px-2 w-[52px] h-[38px] flex items-center">
              <p className="text-[20px]">03/</p>
            </div>
            <div className="pl-6">
              <Image
                src="/hero/avatar.jpeg"
                alt="avatar"
                width={48}
                height={4}
                className="rounded-full"
              />
            </div>
            <div className="pl-6 flex items-center">
              <p className="text-[68px] font-[400px] text-[#85889E]">
                Angel Bator
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <Star />
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">$15,500</p>
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">2 Wins</p>
            </div>
          </div>
        </div>
        <div className="w-auto border h-[1px] text-slate-500"></div>

        <div className="flex justify-between h-[136px] py-[25px] items-center">
          <div className="flex items-center">
            <div className="border border-slate-200 rounded-full px-2 w-[52px] h-[38px] flex items-center">
              <p className="text-[20px]">04/</p>
            </div>
            <div className="pl-6">
              <Image
                src="/hero/avatar.jpeg"
                alt="avatar"
                width={48}
                height={4}
                className="rounded-full"
              />
            </div>
            <div className="pl-6 flex items-center">
              <p className="text-[68px] font-[400px] text-[#85889E]">
                Cheyenne Ekstrom Bothman
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <Star />
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">$15,500</p>
            </div>
            <div className="pl-4">
              <p className="text-[20px] font-[400px]">2 Wins</p>
            </div>
          </div>
        </div>
        <div className="w-auto border h-[1px] text-slate-500"></div>
      </div>
    </>
  );
}

export default ParticipationSection;

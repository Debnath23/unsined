import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between sticky top-0 bg-[#0e1547]  px-[76px] py-[10px]">
      <Logo />
      <div className="flex">
        <div className="flex pt-2">
            <p className="mr-8">CREATE</p>
            <p className="mr-8">ARTIST</p>
            <p className="mr-8 underline">LOGIN</p>
        </div>
        <div className="">
            <button className="w-[92px] h-[38px] border border-slate-200 rounded-full text-white hover:text-black hover:bg-white">SIGNUP</button>
        </div>
        
      </div>
    </header>
  );
}

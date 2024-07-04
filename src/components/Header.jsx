import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <div className="flex">
        <div className="flex pt-2">
            <p className="mr-8">CREATE</p>
            <p className="mr-8">ARTIST</p>
            <p className="mr-8 underline">LOGIN</p>
        </div>
        <div className="">
            <button className="w-[92px] h-[38px] border border-slate-200 rounded-full">SIGNUP</button>
        </div>
        
      </div>
    </header>
  );
}

import React from "react";
import Email from "./icons/Email";
import Image from "next/image";
import Line2 from "./icons/Line-2";

function CreatingharmonySection() {
  return (
    <div className="bg-[#030932] px-[170px] py-[120px] flex justify-between relative">
      <div>
        <div>
          <p className="text-[56.74px] font-[500px]">
            Creating harmony <br /> with the help of <br />
            Music
          </p>
        </div>

        <div className="flex border-[0.5px] border-slate-400 w-[589px] h-[70px] bg-[#191E3E] rounded-full items-center justify-between mt-8">
          <div className="flex ml-2">
            <Email />
            <p className="text-slate-400 font-medium ml-2">EMAIL ADDRESS</p>
          </div>
          <div className="bg-blue-700 w-[200px] rounded-full h-[70px]  flex items-center justify-center font-semibold">
            GET STARTED
          </div>
        </div>
      </div>

      <div>
        <Image src="/hero/jionUs.webp" width={431} height={400} />
      </div>

      <div className="absolute top-[295px] left-[315px]">
        <svg
          width="52"
          height="52"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <g filter="url(#filter0_b_87_1049)">
              <circle
                cx="49.8695"
                cy="49.8696"
                r="35.7291"
                transform="rotate(-35.736 49.8695 49.8696)"
                fill="white"
                fill-opacity="0.07"
              />
            </g>
            <g opacity="0.61" clip-path="url(#clip0_87_1049)">
              <path
                d="M37.6561 43.2235L45.4103 54.0003C44.8913 54.1507 44.3888 54.3852 43.9261 54.7181C41.7404 56.2908 41.2475 59.3374 42.8169 61.5185C44.3886 63.7029 47.4316 64.2004 49.6173 62.6277C51.7996 61.0574 52.2982 58.0117 50.7265 55.8273L43.1382 45.2812L51.9964 40.9083L57.8535 49.0486C57.3345 49.199 56.8326 49.433 56.3693 49.7664C54.1836 51.3391 53.6907 54.3857 55.2601 56.5668C56.8318 58.7512 59.8748 59.2487 62.0604 57.676C64.2415 56.1067 64.7414 53.06 63.1697 50.8757L52.7358 36.3747L37.6561 43.2235Z"
                fill="url(#paint0_linear_87_1049)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_87_1049"
              x="-62.8623"
              y="-62.8623"
              width="225.464"
              height="225.464"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="38.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_87_1049"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_87_1049"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_87_1049"
              x1="41.6109"
              y1="40.3779"
              x2="56.7874"
              y2="61.4701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#5667A5" />
            </linearGradient>
            <clipPath id="clip0_87_1049">
              <rect
                width="25.9848"
                height="25.9848"
                fill="white"
                transform="translate(32.3831 47.0176) rotate(-35.736)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-[10px] left-0">
        <Line2 />
      </div>
    </div>
  );
}

export default CreatingharmonySection;

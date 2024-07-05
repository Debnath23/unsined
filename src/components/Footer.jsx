import React from "react";
import Logo from "./Logo";
import Email from "./icons/Email";
import Music3 from "./icons/Music-3";

function Footer() {
  return (
    <div className="bg-[#030932] px-[76px] py-[40px]">
      <div className="grid grid-cols-4">
        <div>
          <div>
            <Logo />
          </div>
          <div className="pt-12">
            <p className="text-[46.25px]">
              Listen .
              <br />
              Create . <span className="text-[#6BADFF]">Mix</span>
            </p>
          </div>
        </div>
        <div>
          <p className="pb-[20px] text-[20px]">Contest</p>
          <div>
            <p className="py-1 hover:underline cursor-pointer">Remix</p>
            <p className="py-1 hover:underline cursor-pointer">
              Original Tracks
            </p>
            <p className="py-1 hover:underline cursor-pointer">
              Creative Moods
            </p>
            <p className="py-1 hover:underline cursor-pointer">
              Featured Contest
            </p>
          </div>
        </div>

        <div>
          <p className="pb-[20px] text-[20px]">Quick Links</p>
          <div>
            <p className="py-1 hover:underline cursor-pointer">Liked Tracks</p>
            <p className="py-1 hover:underline cursor-pointer">
              Liked Contests
            </p>
          </div>
        </div>
        <div>
          <p className="pb-[20px] text-[20px]">Get in touch</p>
          <div className="flex gap-2">
            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-slate-500">
              <a href="/">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <path
                    d="M9.93909 15.8639H3.77364C3.38113 15.8639 3.06314 15.5471 3.06314 15.1564V3.75358C3.06314 3.36281 3.38118 3.04614 3.77364 3.04614H15.2258C15.6182 3.04614 15.9363 3.36281 15.9363 3.75358V15.1564C15.9363 15.5471 15.6181 15.8639 15.2258 15.8639H11.9454V10.9001H13.6187L13.8693 8.96569H11.9454V7.73066C11.9454 7.17059 12.1016 6.78893 12.9082 6.78893L13.937 6.78848V5.05828C13.7591 5.03471 13.1484 4.98204 12.4379 4.98204C10.9546 4.98204 9.93909 5.88354 9.93909 7.53908V8.96569H8.2615V10.9001H9.93909V15.8639Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-slate-500">
              <a href="/">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path
                    d="M14.0003 1.42058C13.4859 1.66154 12.932 1.82449 12.3511 1.89729C12.9444 1.52286 13.3996 0.929144 13.6141 0.221885C13.0586 0.568581 12.4447 0.820802 11.789 0.956013C11.2664 0.367497 10.5194 0 9.69274 0C8.1076 0 6.82158 1.35645 6.82158 3.02925C6.82158 3.26674 6.84623 3.49729 6.89553 3.71918C4.50838 3.59263 2.39239 2.38787 0.97489 0.55298C0.727546 1.00195 0.586206 1.52286 0.586206 2.07757C0.586206 3.12806 1.09322 4.05547 1.86401 4.59892C1.39398 4.58418 0.950238 4.44637 0.562376 4.22102V4.25829C0.562376 5.72654 1.55257 6.95125 2.86736 7.2286C2.62659 7.29968 2.37267 7.33521 2.11054 7.33521C1.92564 7.33521 1.74486 7.31701 1.56983 7.28147C1.93551 8.48451 2.99555 9.36078 4.25281 9.38418C3.27001 10.1972 2.03083 10.6817 0.685637 10.6817C0.453906 10.6817 0.22464 10.6678 0.000305176 10.6401C1.27154 11.4982 2.7819 12 4.40319 12C9.68699 12 12.5754 7.38462 12.5754 3.38115C12.5754 3.2494 12.5729 3.11766 12.568 2.98852C13.1293 2.56121 13.6166 2.02817 14.0003 1.42058Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-slate-500">
              <a href="/">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.29247 3.061H2.27215C1.25596 3.061 0.597137 2.39903 0.597137 1.55992C0.597137 0.704497 1.27544 0.0563965 2.31195 0.0563965C3.34761 0.0563965 3.98442 0.702865 4.00474 1.55748C4.00474 2.39658 3.34761 3.061 2.29247 3.061ZM15.0002 12.804H11.817V8.32276C11.817 7.14981 11.3191 6.34908 10.2242 6.34908C9.38665 6.34908 8.9209 6.88943 8.70411 7.4102C8.63254 7.57477 8.63383 7.7963 8.63516 8.02464C8.63534 8.05564 8.63552 8.08676 8.63552 8.11788V12.804H5.48196C5.48196 12.804 5.52261 4.86595 5.48196 4.14439H8.63552V5.50344C8.82182 4.90921 9.82954 4.06113 11.4377 4.06113C13.4328 4.06113 15.0002 5.30673 15.0002 7.98892V12.804ZM3.76852 4.14386H0.961306V12.8034H3.76852V4.14386Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-slate-500">
              <a href="/">
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.191 1.76985C16.6785 2.27452 16.8376 3.42053 16.8376 3.42053C16.8376 3.42053 17.0003 4.76665 17.0003 6.11225V7.37416C17.0003 8.72028 16.8376 10.0659 16.8376 10.0659C16.8376 10.0659 16.6785 11.2119 16.191 11.7166C15.6337 12.3136 15.0157 12.3752 14.6664 12.4101C14.628 12.4139 14.5928 12.4175 14.5613 12.4213C12.285 12.5897 8.86691 12.5949 8.86691 12.5949C8.86691 12.5949 4.63755 12.5554 3.33621 12.4276C3.27455 12.4158 3.19981 12.4066 3.11517 12.3962C2.70295 12.3457 2.05596 12.2663 1.54228 11.7166C1.05479 11.2119 0.896188 10.0659 0.896188 10.0659C0.896188 10.0659 0.733521 8.72028 0.733521 7.37416V6.11225C0.733521 4.76665 0.896188 3.42053 0.896188 3.42053C0.896188 3.42053 1.05479 2.27452 1.54228 1.76985C2.10088 1.17201 2.71946 1.11099 3.06881 1.07653C3.10668 1.0728 3.1414 1.06937 3.17252 1.06561C5.44886 0.897217 8.86336 0.897217 8.86336 0.897217H8.87047C8.87047 0.897217 12.285 0.897217 14.5613 1.06561C14.5924 1.06938 14.6272 1.07281 14.6651 1.07655C15.0141 1.11101 15.633 1.17211 16.191 1.76985ZM7.18606 4.23046L7.18656 8.9034L11.5811 6.57498L7.18606 4.23046Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex pt-8">
            <Email />
            <p className="text-[13.15px] pl-2">support@unsinedofficial.com</p>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="w-auto border h-[1px] text-slate-700"></div>
        <div className="flex items-center justify-between py-1">
          <p className="font-[12px]">
            PRIVACY POLICY <span>|</span> TERMS AND CONDITIONS
          </p>
          <div>
            <svg
              width="50"
              height="50"
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
          <p className="font-[12px]">2024 . All Rights Reserved</p>
        </div>
        <div className="w-auto border h-[1px] text-slate-500"></div>
      </div>
    </div>
  );
}

export default Footer;

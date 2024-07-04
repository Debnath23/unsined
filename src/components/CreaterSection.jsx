import Image from 'next/image'
import React from 'react'

function CreaterSection() {
  return (
    <div className='bg-[#010625] h-[373px] flex'>
        <div className='h-[308px] pt-[84px] pl-[24px]'>
        <Image src="/hero/music.webp" alt="music" width={795} height={314} />
        </div>
        <div>
            <div className='font-600 flex pt-8'>
                <div className='text-[45px] mr-4'>
                <p>Active Creators <br /> and Participants</p>
                </div>
                <div className='text-[111px]'>
                    <p>873K</p>
                </div>
            </div>
            <div className='w-auto border h-[1px] text-white'></div>
        </div>
    </div>
  )
}

export default CreaterSection
import React from 'react'
import Image from 'next/image'
export default function JobCard() {
  return (
    <div className="flex flex-col my-[29px] mx-[20px]  w-[380px] h-[484px] bg-gradient-to-b from-[#e8ecdf] to-white rounded-[10px] border border-[#d2d8c5]">


    <div className="w-[379.54px] h-[224.77px]  mix-blend-multiply bg-[#888f77] rounded-tl-[10px] rounded-tr-[10px]">
    </div>
    <div className='pl-[49px] pt-[23px]'>

    <h1 className="w-[297px] h-24 text-[#2e3224] text-4xl font-semibold leading-[42px]">Campaign Manager </h1>
    <p class="w-[297px] h-[80.45px] text-[#464b37] text-lg font-normal leading-normal mt-[-10px]">About the news in 2-3 lines. About the news in 2-3 lines. About the news in 2-3 lines</p>

    <span className='flex mt-2'>
        <p className='w-[56.72px] h-[17.97px] text-[#616751] text-xl font-semibold '>Apply</p>
        <Image
        src="../assets/applyArrow.svg"
        width={12}
        height={15}
        className='ml-2 mt-[10px]'
        alt="arrow"/>

    </span>
    </div>
    </div>
  )
}

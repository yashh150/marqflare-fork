import React from 'react'
import Image from 'next/image'
export default function Card() {
  return (
    <div className="flex flex-col w-[589.11px] h-[735.89px] bg-gradient-to-b from-[#e8ecdf] mr-[30px] mb-[50px] to-white rounded-[10px] border border-[#d2d8c5]">
    <div class="w-[589.11px] h-[359.04px] bg-[#2e3224] rounded-[10px] border border-[#d2d8c5]"></div>
    <div className='pl-[65px] pt-[40px] '>
        <h1 className='w-[375.17px] h-[118.27px] text-[#2e3224] text-4xl font-semibold '>
            About the blog title
            <br />in 1/2 lines
        </h1>
        <p className='w-[460px] text-[#464b37] text-lg font-normal leading-normal mt-[-30px]'>
            A short description of blog in 2/3 lines.A short
            <br />description of blog in 2/3 lines.A short description of
            <br />blog in 2/3 lines.A short description of blog in 2/3
            <br />lines.A short description of blog in 2/3 lines.
        </p>
        <span >
            <Image
            src="../assets/dash.svg"
            width={380}
            height={500}
            alt="dash"
            className='mt-3 mb-2 ml-[-4px]'/>
            <span className='flex flex-row '>
 
            <p className='text-[#2e3224] mr-[12px]'>
                <strong className='mr-1'>
                    5mins   
                </strong>

                 Read
                
            </p>
            <p className='text-[#2e3224] mr-[12px]'>&lowast;</p>
            <p className='text-[#2e3224]'>Published on <strong>2nd May, 2024</strong></p>
            </span>
            <Image
            src="../assets/dash.svg"
            width={380}
            height={500}
            alt="dash"
            className='mt-2 mb-3 ml-[-4px]'/>
        </span>
        <span className='flex flex-row mt-[20px]s'>
            <p className='text-[#616751] text-[22px] font-semibold '>Read More</p>
            <Image 
            src="../assets/blogCardArrow.svg"
            width={20}
            height={20}
            alt="arrow"
            className='m-2'/>
        </span>
    </div>
</div>
  )
}

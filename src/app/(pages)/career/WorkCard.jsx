import React from 'react'
import Image from 'next/image'
export default function WorkCard() {
  return (
    <div class="w-[380px] mx-auto my-10 h-[434.04px] bg-gradient-to-b from-[#e8ecdf] to-white hover:from-[#616751] hover:to-[#2e3224]  rounded-[10px] border border-[#d2d8c5] transition duration-300 group pl-[50px] pb-[50px] hover:scale-105">
                <Image 
                src="../assets/asterisk.svg"
                width={110}
                height={110}
                alt="star" 
                className='group-hover:hidden visible mt-10 mb-5'/>
                <Image 
                src="../assets/asteriskDark.svg"
                width={110}
                height={110}
                alt="star" 
                className='group-hover:block hidden mt-10 mb-5'/>
                <h1 className='group-hover:text-[#e8ecdf] w-[242px] h-24 text-[#2e3224] text-4xl font-semibold  leading-[42px] transiton duration-150'>We believe in
                <br/>co-creation</h1>
                <p className='group-hover:text-[#e8ecdf] w-[297px] h-24 text-[#464b37] text-lg font-normal leading-normal transiton duration-150'>
                Our team of strategists, designers, <br/>video editors, and animators offers 
                comprehensive solutions to <br/>enhance 
                your online presence and 
                <br/>meet your 
                business.
                </p>
            </div>
  )
}

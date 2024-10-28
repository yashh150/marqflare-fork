"use client";
import React from 'react'
import { useState } from 'react'
export default function TabbedNav() {
    const [active , setActive] = useState('1')
  return (
    <div className='mt-[66px]'>
        <div className='flex flex-row w-1/2 justify-around m-auto'>
        <span>

            <p onClick={()=>{
                setActive('1')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '1' ?'font-semibold':'font-normal'}`}>
                POINT ONE
            </p>
                {
                    active=='1' &&

                <div className=' z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>
        <span>

            <p onClick={()=>{
                setActive('2')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '2' ?'font-semibold':'font-normal'}`}>
                POINT TWO
            </p>
            {
                    active=='2' &&

                <div className='z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>
        <span>

            <p onClick={()=>{
                setActive('3')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '3' ?'font-semibold':'font-normal'}`}>
                POINT THREE
            </p>
            {
                    active=='3' &&

                <div className='z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>
        <span>

            <p onClick={()=>{
                setActive('4')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '4' ?'font-semibold':'font-normal'}`}>
                POINT FOUR
            </p>
            {
                    active=='4' &&

                <div className='z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>
        <span>

            <p onClick={()=>{
                setActive('5')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '5' ?'font-semibold':'font-normal'}`}>
                POINT FIVE
            </p>
            {
                    active=='5' &&

                <div className='z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>
        <span>

            <p onClick={()=>{
                setActive('6')
            }} className={`w-[110.01px] h-6 text-center cursor-pointer transition-all duration-200 text-[#464b37] text-base ${active == '6' ?'font-semibold':'font-normal'}`}>
                POINT SIX
            </p>
            {
                    active=='6' &&

                <div className='z-10 h-[4px] rounded-full relative bottom-[-13px] w-full bg-[#737a62]'/>
                }
        </span>

        </div>
            <div className='z-0 h-[2px] mt-[10px] mx-auto w-[60%] bg-[#e8ecdf]'/>

        <div>
        {active === '1' && (
          <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
             <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '1' ? 'animate-slideIn' : 'animate-slideOut absolute' }`}>Analysing Political Campaign Policies and Platform Effectiveness</p>
          </div>
        )}
        {active === '2' && (
         <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
      <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '2' ? 'animate-slideIn' : 'animate-slideOut absolute' }`}>2</p>
       </div>
        )}
        {active === '3' && (
          <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
     <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '3' ? 'animate-slideIn' : 'animate-slideOut absolute' }`}>Thre</p>
        </div>
        )}
        {active === '4' && (
         <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
 <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '4' ? 'animate-slideIn' : 'animate-slideOut absolute' }`}>FOur</p>
       </div>
        )}
        {active === '5' && (
          <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
             <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '5' ? 'animate-slideIn' : 'animate-slideOut' }`}>5</p>
        </div>
        )}
        {active === '6' && (
          <div className="w-[1121.62px] flex flex-row h-[359.03px] bg-gradient-to-b from-[#616751] to-[#2e3224] rounded-[10px] m-auto mt-[39px]">
          <p className={`w-[409.62px] mt-[107px] ml-[82px] h-[122.40px] text-[#e8ecdf] text-4xl font-semibold leading-[48px] ${active === '6' ? 'animate-slideIn' : 'animate-slideOut ' }`}>6</p>
        </div>
        )}
        </div>
            
    </div>
  )
}

"use client"
import boldArrow from "@/../public/assets/boldArrow.svg"
import Image from 'next/image'
import StickyHero from "./StickyHero"
export default function Hero() {

  return (
    <div className='mt-[83px] w-full flex-col transition-all duration-500'>
      <h1 className='max-w-[940px] w-full sm:text-[2.5rem] sm:leading-[3.75rem] sm:font-semibold text-[2rem] leading-[3rem] font-semibold text-[#2e3224] mx-auto text-center'>
      Evolving Brand & Communication <br/>Strategy with Tech, Data, and Creativity
      </h1>
      <p className='text-center mt-[16px] text-primary'>
      Unlock accelerated growth for top-tier global enterprises with our agile solutions
      </p>
      <button className=' my-[30px] border-2 border-secondary flex flex-row px-[20px] py-[10px] rounded-full bg-secondary  text-white transition-all duration-300 mx-auto'> 
            <p className='text-white text-xl font-se leading-snug whitespace-nowrap'>

            Unlock Now
            </p>
            <Image
            className="my-auto pt-1 ml-[10px]" 
            src={boldArrow}
            width={20}
            height={10}
            alt="arrow"
          ></Image>
           
        </button>

<StickyHero/>
      
      <div className='mt-[-500vh] flex flex-col  w-3/4 mx-auto'>
        <p className='text-center text-primary md:text-[48px] sm:text-xl  font-semibold leading-[60px]'>
        360* Value
        </p>
        <p className='font-[400] sm:mt-12 w-1/2 mx-auto text-center text-secondary text-sm md:text-lg  leading-normal mt-[15px]'>
        Everyday, we embrace transformation and generate value for 
        <br/>
        all stakeholders across the globe.
        </p>
      </div>
    </div>
  )
}

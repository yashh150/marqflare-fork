import { LogoArrayDark } from "../../../../public/assets/LogoIndex"
import Image from "next/image"

export default function BrandLight() {
  return (
    <div className="flex flex-col mt-[80px] mb-[-30px] py-[90px] bg-[#d2d8c5]">
      <h1 className='text-center w-3/4 mx-auto mb-3 mt-10 text-[#2e3224] text-3xl md:text-[2.8rem] leading-tight font-semibold'>
      Driving Success with <br>
      </br>
      Global Brand and Industry Titans
      </h1>
      <p className='w-1/2 m-auto h-[11px] text-center text-[#2e3224] text-sm font-normal leading-[15px]'>
      We have been working with some Fortune 50+ clients
      </p>
  
      <div className="flex flex-col p-5 w-[80%] m-auto">

        <div className="flex flex-row justify-around mb-4 flex-wrap">

      {
        LogoArrayDark.map((logo , index)=>
        {
            if(index<6)
            return (
            <Image
            className="mx-4 mt-10   transition-all duration-150"
            key={index}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="logo">
            </Image>

            )
        }
        )
      }
        </div>
        <div className="flex flex-row justify-around flex-wrap">

      {
        LogoArrayDark.map((logo , index)=>
        {
            if(index>=6)
            return (
            <Image
            className="mx-4 mt-10 hover:scale-110 transition-all duration-150"
            key={index}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="logo">
            </Image>

            )
        }
        )
      }
        </div>
      </div>
    </div>
  )
}

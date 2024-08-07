import { LogoArray } from "../../../../public/assets/LogoIndex"
import Image from "next/image"
export default function Recognition() {
  return (
    <div className='pb-10 pt-[60px] flex flex-col bg-gradient-to-br from-[#464b37] to-[#212319]'>
      <div className="flex flex-col">

<h1 className='text-center mt-10 text-[#e8ecdf] text-3xl md:text-[3rem] font-semibold leading-[60px]'> 
Industry recognition
</h1>
<p className='md:w-1/2  w-3/4 m-auto text-center text-[#e8ecdf] text-sm font-norma leading-normal'>
Everyday, we embrace transformation and generate value for all stakeholders across the globe.
Learn what Marqflare Solutions can do for you

</p>
</div>
<div className="flex flex-row justify-around flex-wrap p-5 w-[80%] m-auto">

      {
        LogoArray.map((logo , index)=>
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
  )
}

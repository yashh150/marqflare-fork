import { LogoArray2 } from "../../../../public/assets/LogoIndex"
import Image from "next/image"
export default function Recognition() {
  console.log(LogoArray2)
  return (
    <div id="customers" className='pb-10 pt-[60px] flex flex-col bg-gradient-to-br from-[#464b37] to-[#212319]'>
      <div className="flex flex-col">

<h1 className='text-center mt-10 text-[#e8ecdf] text-3xl md:text-[3rem] font-semibold leading-[60px]'> 
Industry recognition
</h1>
<p className='md:w-1/2  w-3/4 m-auto text-center text-[#e8ecdf] text-sm font-norma leading-normal'>
We are proud of our industry recognition, reflecting our commitment to innovation, excellence, and <br/>delivering exceptional, results-driven solutions.

</p>
</div>
<div className="flex flex-row justify-around flex-wrap p-5 w-[80%] m-auto">

      {
        LogoArray2.map((logo , index)=>
        {
            if(index>=6)
            return (
            <Image
            className="mx-4 mt-10  transition-all duration-150"
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

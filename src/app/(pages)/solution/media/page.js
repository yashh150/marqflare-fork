import Image from "next/image"
import mediaHero from "@/../public/assets/mediaHero.svg"

export default function page() {
  return (
    <div>
      <div className="flex h-[500px] bg-[#E8ECDF] ">
        <Image
        className="p-10 mx-auto"
        src={mediaHero}
        width={1500}
        height={1000}
        alt=""/>
      </div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Media Solutions</h1>
      <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
        Our team of strategists, designers, video editors, and animators offers comprehensive solutions
        <br/>
         to enhance your online presence and meet your business objectives through ongoing content
         <br/>
          creation and integrated flagship campaigns.
      </p>

    </div>
  )
}

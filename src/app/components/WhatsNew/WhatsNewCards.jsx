"use client"
import Image from "next/image"

export default function WhatsNewCards(props) {
  console.log(props)
  return (
    <div class="w-[600px] mt-[50px] p-[48px] h-[300px] flex flex-col bg-[#464b37] rounded-[20px]">
        <h1 class="text-white w-1/2 text-[28px] whitespace-pre-line font-semibold leading-[34px]">{props.feature.title}</h1>
        <p class="whitespace-pre-line mt-[15px] text-white text-lg font-normal leading-normal tracking-tight z-10">{props.feature.desc}</p>
        <span className="flex group flex-row mt-[16px]">
        <h2 class="w-[171.78px] text-white text-lg font-bold leading-normal tracking-tight">Talk to our Experts</h2>
        <Image
                    className="mr-8 group-hover:mr-5 transition-all duration-300"
                    src="assets/boldArrow.svg"
                    width={20}
                    height={10}
                    alt="arrow"
                  ></Image>
        </span>
        <Image
        className="hidden sm:flex relative top-[-200px] right-[-300px] z-0"
        src="assets/star.svg"
        width={180}
        height={100}
        alt="star"
        />
    </div>
   
  )
}

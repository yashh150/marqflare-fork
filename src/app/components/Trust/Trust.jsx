"use client";
import ReviewCard from "./ReviewCard"
import Image from "next/image"
import { useRef } from "react"
import './TrustStyle.css'
export default function Trust() {
    const HorizontalScroll = useRef(null)
const onLeft=()=>{
    HorizontalScroll.current.scrollBy({ left: -400, behavior: 'smooth' });
}
const onRight=()=>{
    HorizontalScroll.current.scrollBy({ left: 400, behavior: 'smooth' });
}

  return (
    <div className="flex flex-col mt-10">
       <div className="flex flex-col"> 


<h1 className="w-[90%] m-auto text-center text-primary text-4xl font-semibold leading-normal">See how people are trusting us</h1>
<p className='md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-normal leading-normal'>
Everyday, we embrace transformation and generate value for all stakeholders across the globe.

</p>
<p className='md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-medium leading-normal'>
Learn what Marqflare Solutions can do for you

</p>
  </div>
  <div className="flex flex-row m-auto w-[90%] justify-between">
    <Image
className="w-5 sm:mx-10 mx-1"
    src="assets/leftArrow.svg"
    width={10}
    height={10}
    alt="logo"
    onClick={onLeft}/>
  
  <div ref={HorizontalScroll} className="flex flex-1 flex-row overflow-scroll w-1/2 no-scrollbar">
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
  </div>
    <Image
    className="w-5 sm:mx-10 mx-1"
    src="assets/rightArrow.svg"
    width={10}
    height={10}
    alt="logo"
    onClick={onRight}/>
    </div>
    </div>
  )
}

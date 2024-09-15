import React from "react";
import Button from './Button'
import Image from "next/image";

const ButtonArray = [
    {
        title : "Measurement"
    },
    {
        title : "Marketing"
    },
    {
        title : "Data"
    },
    {
        title : "Tech"
    },
    {
        title : "Design"
    },
    {
        title : "Communication"
    },
]
export default function layout({children}) {


  return (

    <div>
        <div className="h-[550px] bg-[#e8ecdf]">
        <Image
        className="p-10 mx-auto"
        src="../assets/fish.svg"
        width={1500}
        height={1000}
        alt=""/>
        </div>
{children}
<h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Solutions for Teams</h1>
      <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
      Discover our solutions for every team. Enhance the customer experience through advanced 
      <br/>personalization at every touchpoint in their journey, leveraging data-driven insights to build and 
      <br/>sustain robust customer relationships
      </p>
      <span className='max-w-[1200px] flex flex-row justify-between m-auto'>
        {
            ButtonArray.map((button , index)=>
                <Button key={index} button={button}/>
            )
        }

      </span>


     
    </div>
  )
}

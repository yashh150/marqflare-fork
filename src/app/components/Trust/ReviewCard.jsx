import React from 'react'
import Image from 'next/image'

export default function ReviewCard(props) {
  console.log(props.props)
  return (
    <div className="flex flex-col my-10  m-5 ">
            <div className="w-[114px]  h-[114px] bg-[#d9d9d9] rounded-full border-2 mb-[-57px] z-10 border-white m-auto">
              <Image
                src={props.props.img}
                width={115}
                height={50}
                alt="logo"
                className="m-auto"
              ></Image>
            </div>

            <div className="w-[580px] h-[300px] bg-[#d2d8c5] rounded-[10px] m-auto z-0 py-[60px] pl-[60px]">
              <div>
                <h1 class="text-[#464b37] text-[22px] font-semibold whitespace-pre-wrap leading-normal tracking-tight">
                  {props.props.name}
                  <br />
                </h1>
                <h2 class="text-[#464b37] text-md  italic font-normal whitespace-pre-wrap leading-normal tracking-tight">
                  
                  {props.props.position}
                  <br />
                </h2>
                <p class="text-[#464b37] mt-5 text-lg font-normal whitespace-pre-wrap leading-normal tracking-tight">
                  {props.props.review}
                </p>
              </div>
            </div>
          </div>
  )
}

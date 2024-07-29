import React from 'react'
import Image from 'next/image'
export default function IndustryCard(props) {
    // console.log(props.props)
  return (
    <div className="w-[272px] h-[305px] bg-gradient-to-b from-white to-primary rounded-[20px] mx-auto my-5">
      <span className='mt-[34px] w-5/6 m-auto'>
        <h1 className='text-white text-center text-2xl font-semibold leading-[41px]'>
          {props.props.title}
        </h1>
      </span>
      <Image
      className='mx-auto mt-14'
      src={props.props.icon}
      width={110}
      height={110}
      alt="logo">

      </Image>
    </div>
  )
}

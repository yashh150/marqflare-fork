import React from 'react'
import Image from 'next/image'
import './Styles.css'
export default function IndustryCard(props) {
  return (
    <div className="flex gradient-border group flex-col active:scale-105 w-[272px] h-[305px] bg-gradient-to-b from-[#b4baa0] to-primary rounded-[20px] mx-auto my-5 transition-all duration-150">
      <span className='mt-[34px] w-5/6 m-auto flex flex-row justify-between'>
        <h1 className='text-white text-center ml-3 text-2xl font-semibold group-hover:text-[1.55rem] transition-all duration-300'>
          {props.props.title}
        </h1>
        <Image
        className='mr-8 group-hover:mr-5 transition-all duration-300'
            src="assets/boldArrow.svg"
            width={30}
            height={10}
            alt="arrow">


            </Image>
      </span>
      <Image
      className='m-auto group-hover:scale-110 transition-all duration-300 '
      src={props.props.icon}
      width={130}
      height={130}
      alt="logo">

      </Image>
    </div>
  )
}

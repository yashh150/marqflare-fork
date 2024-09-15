import React from 'react'

export default function Button(props) {
  return (
    <div className='bg-[#e8ecdf] cursor-pointer h-[50px] rounded-[107px] flex transition-all duration-150 group hover:bg-[#737a62]'>
      <p className='text-[#2e3224] text-center text-[22px] font-normal my-auto mx-[26px] group-hover:text-[#e8ecdf] '>{props.button.title}</p>
    </div>
  )
}

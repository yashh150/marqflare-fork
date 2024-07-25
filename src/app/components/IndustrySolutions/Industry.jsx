import React from 'react'
import Brands from './Brands'

export default function Industry() {
  return (
    <div className='h-[1649px] bg-gradient-to-b from-[#464b37] to-[#212319] flex flex-col'>
      <div className="flex flex-col">

      <h1 className='text-center mt-10 text-[#e8ecdf] text-3xl font-semibold leading-[60px]'> 
      Solution for Industries
      </h1>
      <p className='md:w-1/2 w-3/4 m-auto text-center text-[#e8ecdf] text-sm font-norma leading-normal'>
      Discover our solutions for every industry. Enhance the customer experience through advanced personalization at every touchpoint in their journey, leveraging data-driven insights to build and sustain robust customer relationships

      </p>
      </div>
      <div>

      </div>
      <Brands/>
    </div>
  )
}

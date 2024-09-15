import React from 'react'

export default function Card(props) {
  return (
    <div className='h-[420px] mb-[30px] bg-[#e8ecdf] w-[1120px] rounded-[20px] flex flex-row m-auto' >
      <div className='w-1/2 pt-[98px] pl-[67px]'>
      <h1 className='text-4xl mb-[12.5px] font-semibold leading-[42px] text-[#2e3224]'>
Measurement
      </h1>
      <h2 className='text-[#464b37] text-lg font-normal mb-[23.44px]'>
        <i>

      Assessing Political Party/Leader Social Media 
      <br/>Effectiveness for Strategic Insights
        </i>
      </h2>
            <p className='text-lg leading-normal font-medium text-[#464b37] whitespace-pre-line'>
            Our measurement team gathers post-level data 
            <br/>from profiles and conducts trend analysis on 
            <br/>performance metrics. Using these insights, we 
            <br/>share observations to enhance performance.

            </p>
      </div>
      <div className='w-1/2 bg-[#d2d8c5] rounded-r-[20px]'>

      </div>
    </div>
  )
}

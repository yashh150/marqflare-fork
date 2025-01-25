import React from 'react'
import Card from '../Card'
import CardRev from '../CardRev'

export default function page() {
  return (
    <div>
      <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Marqflare & Politics</h1>
      <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
      Our team of experts delivers data-driven electoral strategies, offering tailored consulting, targeted election campaigns, and programmatic advertising to drive success. We leverage technology and analytics to optimize political campaigns for maximum impact and engagement.
      </p>
<Card/>
<CardRev/>
<Card/>
<CardRev/>
<Card/>
<CardRev/>

    </div>
  )
}

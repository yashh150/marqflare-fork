import React from 'react'
import Card from '../Card'
import CardRev from '../CardRev'
export default function page() {
  return (
    <div>
    <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Solutions for EdTech</h1>
    <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
    Our team of data science experts, marketing specialists, and business consultants excel in crafting data-
    <br/>driven electoral strategies. We provide tailored guidance to clients, leveraging technology to build and 
    <br/>execute targeted election campaigns. Our services encompass strategic consultation, content 
    <br/>dissemination, and amplification via programmatic advertising.
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

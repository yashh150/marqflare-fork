import React from 'react'
import Brands from './Brands'
import IndustryCard from './IndustryCard'

const IndustryCards = [
  {
    title : "Politics",
    icon : "assets/politcs.svg"
  },
{
  title:"Ed Tech",
  icon : "assets/edtech.svg"
},
{
  title:"Healthcare",
  icon : "assets/health.svg"
},
{
  title:"Ecommerce",
  icon : "assets/ecomm.svg"
},
{
  title:"Fintech",
  icon : "assets/fintech.svg"
},
{
  title:"Media",
  icon : "assets/tv.svg"
},
{
  title:"Gaming",
  icon : "assets/game.svg"
},
{
  title:"Real Estate",
  icon : "assets/house.svg"
},
]


export default function Industry() {
  return (
    <div className=' bg-gradient-to-b from-[#464b37] to-[#212319] flex flex-col'>
      <div className="flex flex-col">

      <h1 className='text-center mt-10 text-[#e8ecdf] text-3xl font-semibold leading-[60px]'> 
      Solution for Industries
      </h1>
      <p className='md:w-1/2  w-3/4 m-auto text-center text-[#e8ecdf] text-sm font-norma leading-normal'>
      Discover our solutions for every industry. Enhance the customer experience through advanced personalization at every touchpoint in their journey, leveraging data-driven insights to build and sustain robust customer relationships

      </p>
      </div>
      <div className='md:flex flex-col sm:hidden'>
        <div className='flex flex-col sm:flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index<4)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
        <div className='flex flex-col sm:flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index>=4)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
      </div>
      <div className='sm:flex hidden flex-col md:hidden'>
        <div className='flex flex-co flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index<2)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
        <div className='flex flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index >=2 && index <4)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
        <div className='flex flex-col sm:flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index>=4 && index<6)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
        <div className='flex flex-col sm:flex-row justify-around'>

        {
          IndustryCards.map((industrycard ,index)=>
          {
            if(index>=6 && index<8)
            return (

              <IndustryCard props={industrycard} key={index}/>
            )
          }
          )
        }
        </div>
      </div>

      <Brands/>
    </div>
  )
}

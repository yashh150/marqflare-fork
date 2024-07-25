import React from 'react'
import SolutionCard from './SolutionCard'
const SolutionsArray = [
    {
        title : "Brand Solutions",
        desc:"Reinvent your Brand. Strategy to lead in the next decade",
        icon:"assets/brand.svg",
    },
    {
        title : "Media Solutions",
        desc:"Marketing for a multidimensional world.",
        icon:"assets/media.svg",
    },
    {
        title : "Data Solutions",
        desc:"Unlock powerful insights by tapping into data you didn't even know you had.",
        icon:"assets/data.svg",
    },
    {
        title : "Tech Solutions",
        desc:"Emerging tech shapes the future",
        icon:"assets/tech.svg",
    }
]

export default function Solutions() {
  return (
    <div>
      <p className="w-[90%] m-auto text-center text-[#2e3224] text-5xl font-medium leading-normal">Learn what Marqflare Solutions can do for you</p>
        <div className='w-[90%] my-10 mx-auto flex flex-col md:flex-row justify-around'>
            {SolutionsArray.map((solution ,index)=>
                <SolutionCard key={index} solution={solution}/>
            )}
        </div>
        
    </div>
  )
}

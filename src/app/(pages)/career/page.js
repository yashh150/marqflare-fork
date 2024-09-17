import React from 'react'
import WorkCard from './WorkCard'
import JobCard from './JobCard'
export default function page() {
  return (
    <div>
       <div className='h-[500px] bg-[#e8ecdf] mb-[50px]' />
            <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Our Work Culture</h1>
            <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
                Our team of strategists, designers, video editors, and animators offers comprehensive solutions
                <br />to enhance your online presence and meet your business objectives through ongoing content
                <br />creation and integrated flagship campaigns.
            </p>
            <div className='flex max-w-[1250px] m-auto flex-col sm:flex-row justify-around'>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
            </div>
            <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">We are Looking for/ Career</h1>
            <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
                Our team of strategists, designers, video editors, and animators offers comprehensive solutions
                <br />to enhance your online presence and meet your business objectives through ongoing content
                <br />creation and integrated flagship campaigns.
            </p>
            <div className='flex flex-col'>
                <div className='flex flex-row m-auto w-[80%]'>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
                <div className='flex flex-row m-auto w-[80%]'>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
              
            </div>
    </div>
  )
}

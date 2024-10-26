import React from 'react'
import Card from './Card'
export default function page() {
    return (
        <div>
            <div className='h-[500px] bg-[#e8ecdf] mb-[50px]' />
            <h1 className="w-[90%] mx-auto text-center mt-[50px] text-[#2E3224] text-5xl md:text-[3rem] font-semibold leading-normal">Welcome to our blog</h1>
            <p className='md:w-1/2  w-3/4 mx-auto mt-[12px] mb-[40px] text-center text-[#464b37] text-sm font-normal leading-normal'>
                Our team of strategists, designers, video editors, and animators offers comprehensive solutions
                <br />to enhance your online presence and meet your business objectives through ongoing content
                <br />creation and integrated flagship campaigns.
            </p>
                    <div className='flex flex-col'>
                            <span className='flex flex-col sm:flex-row w-[85%] mx-auto justify-around'>
                                <Card/>
                                <Card/>
                            </span>
                            <span className='flex flex-col sm:flex-row w-[85%] mx-auto justify-around'>
                                <Card/>
                                <Card/>
                            </span>
                            <span className='flex flex-col sm:flex-row w-[85%] mx-auto justify-around'>
                                <Card/>
                                <Card/>
                            </span>
                          
                    </div>
            
        </div>
    )
}

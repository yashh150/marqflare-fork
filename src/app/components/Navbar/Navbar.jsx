"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./Navstyle.css"
import { redirect } from 'next/navigation'
const Navlinks = [
    {
        title: "Solutions" , 
        href: "/solutions"
},
    {
        title: "Industries" , 
        href: "/industries"
},
    {
        title: "Customers" , 
        href: "/customers"
},
    {
        title: "Learning" , 
        href: "/learning"
},
    {
        title: "Contact Us" , 
        href: "/contact"
},
]

export default function Navbar() {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between'>
<Image 
      className='my-[40px] w-auto mx-[8%]'
      src="assets/logo.svg"
      width={110}
      height={50}
      alt="logo">
    
      </Image>
    
        
        
            <span className='flex flex-col sm:flex-row w-full justify-around'>
                {
                    Navlinks.map((link , index)=>
                        <Link className='my-[40px] w-full  px-auto text-center whitespace-nowrap text-primary' href={link.href} key={index}>{link.title}</Link>
                    )
                }
            </span>
        
        <button className='whitespace-nowrap border-2 border-secondary text-secondary my-[30px] px-[20px] py-[10px] rounded-full hover:bg-secondary hover:text-white transition-all duration-300 max-w-52 mx-[8%]'  > 
            Talk To Sales
        </button>
    </div>
  )
}

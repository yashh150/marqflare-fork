"use client";
import './CardStyle.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function SolutionCard(props) {

  const router = useRouter();
  const redirect = () => {
    router.push(props.solution.link);
  };
  return (
    
      <div onClick={redirect} id="card" className="group hover:scale-105 pt-[37px] pb-[22px] justify-between flex flex-col w-[282px] h-[380px] rounded-[20px] transition-all duration-300 m-auto my-5 cursor-pointer" >
        <div className='ml-8 relative'>

        <h1 className='text-primary text-[28px] font-semibold leading-[34px] w-1/2 group-hover:text-light transition-all duration-300'>
                {props.solution.title}
        </h1>
        <h2 className='w-5/6 my-2 text-primary text-lg font-normal leading-normal group-hover:text-light transition-all duration-300'>
                {props.solution.desc}
        </h2>
        </div>
        <Image
        className='ml-8 mb-3 transition-all group-hover:hidden duration-300'
        src={props.solution.icon}
        width={100}
        height={100}
        alt="logo">

        </Image>
        <Image
        className='ml-8 mb-3  hidden transition-all hover-rotate group-hover:flex  duration-300'
        src={props.solution.iconDark}
        width={100}
        height={100}
        alt="logo">

        </Image>
      </div>

  )
}

"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function WhatsNewCards(props) {
  const [isHovering, setIsHovering] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.play(); 
    }
  }, []);
  return (
    <div className="group justify-between md:mr-[27px] flex flex-row sm:w-[600px] h-[300px] w-[70%] mt-[27px] mx-auto md:h-[300px]  bg-[#464b37] rounded-[20px]">
      <div  onMouseEnter={() => {
        setIsHovering(true);
        playerRef.current.stop(); // Start playing on hover
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        playerRef.current.play(); // Stop the animation when not hovering
      }}
       className="flex flex-col w-1/2 sm:p-[40px] justify-around">
        <h1 className="sm:text-[30px] text-[3.18px] text-[#8f9777] font-semibold leading-[34px] ml-5 sm:ml-1 sm:mt-1 mt-3">
            /.
        </h1>
        <h1 className="text-white sm:text-[20px] sm:mt-3 font-semibold sm:leading-[25px] sm:ml-1 ml-5">
            {props.feature.title}
        </h1>
        <p className="sm:w-3/4 w-1/2 text-white text-sm sm:font-normal leading-normal tracking-tight sm:mb-2 sm:ml-1 ml-5">
        {props.feature.desc}
        </p>
        <span className="flex flex-row w-full justify-between my-3 ml-5 sm:ml-1">
            <h1 className="align-middle pt-[4px] text-white text-center sm:text-lg text-sm font-semibold leading-normal tracking-tight whitespace-nowrap">
                Check Now
            </h1>
           
            <Player
            ref={playerRef}
        autoplay={true}
        loop={true}
        controls={true}
        src="/assets/Arrow.json"
        className="w-full m-auto group-hover:scale-110 duration-300"
        hover
        keepLastFrame
      />
            
          
        </span>

      </div>
      <div className="flex w-1/2 md:h-[300px] h-[300px] bg-[#616751] rounded-[20px]" >
        <Image
        className="m-auto hover:scale-110 transition-all duration-150"
        src={props.feature.image}
        width={130}
        height={100}
        alt="logo"/>
        

      </div>
    </div>
  )
}

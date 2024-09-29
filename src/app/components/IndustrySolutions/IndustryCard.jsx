"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Styles.css";
export default function IndustryCard(props) {
  const router = useRouter()
  const handleRoute=()=>{
router.push(props.props.link)
  }
  return (
    <main>
  <article  className="mx-5 flex flex-col mb-5 w-[272px] active:scale-105 duration-150" onClick={handleRoute}>
      <div className="flex group flex-col  bg-[#5a6243] m-[2px] to-primary rounded-[20px]  transition-all duration-150">
        <span className="mt-[34px] w-5/6 m-auto flex flex-row justify-between">
          <h1 className="text-white text-center mx-3 text-[1.8rem] font-semibold group-hover:text-[1.85rem] transition-all duration-300 whitespace-nowrap">
            {props.props.title}
          </h1>
          <Image
            className="mr-8 group-hover:mr-5 transition-all duration-300"
            src="assets/boldArrow.svg"
            width={30}
            height={10}
            alt="arrow"
          ></Image>
        </span>
        <Image
          className="mx-auto  mt-8 group-hover:scale-105 transition-all duration-300 "
          src={props.props.icon}
          width={120}
          height={130}
          alt="logo"
        ></Image>
      </div>
  </article>
</main>
  );
}

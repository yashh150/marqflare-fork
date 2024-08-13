import React from "react";
import Image from "next/image";
import "./Styles.css";
export default function IndustryCard(props) {
  return (
    <div className="gradient-border mx-5 mb-5">
      <div className="flex group flex-col active:scale-105 w-[272px] h-[305px] bg-gradient-to-b from-[#9FA098] m-[2px] to-primary rounded-[20px]  transition-all duration-150">
        <span className="mt-[34px] w-5/6 m-auto flex flex-row justify-between">
          <h1 className="text-white text-center mx-3 text-[1.875rem] font-semibold group-hover:text-[2rem] transition-all duration-300 whitespace-nowrap">
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
          className="mx-auto mb-[50px] group-hover:scale-110 transition-all duration-300 "
          src={props.props.icon}
          width={140}
          height={130}
          alt="logo"
        ></Image>
      </div>
    </div>
  );
}

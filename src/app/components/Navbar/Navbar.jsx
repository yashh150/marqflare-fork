"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/../public/assets/logo.svg"

import "./Navstyle.css";



export default function Navbar() {
  const Navlinks = [
    {
      title: "Solutions",
      href: "#solutions",
    },
    {
      title: "Industries",
      href: "#industries",
    },
    {
      title: "Customers",
      href: "#customers",
    },
    {
      title: "Learning",
      href: "/blogs",
    },
  
    ];

    const router = useRouter();
  const handleRedirection = ()=>{
    if(window.location.pathname == '/blogs'){

      router.push("/");
      
      
    }
  }
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

   const talkToSales = () => {
  // 
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
   }

  const toHome = () => {
    router.push("/");
  };
  return (
    <div className="w-[93%] mx-auto flex flex-col  md:flex-row justify-between transition-all duration-200 px-16">
      <div className="flex flex-row justify-between my-[40px] md:w-auto mx-[8%] cursor-pointer">
        <Image
          className="sm:hidden"
          src={Logo}
          width={140}
          height={50}
          alt="logo"
          onClick={toHome}
        ></Image>
        <div className="w-full flex flex-row justify-between">
          <Image
            className="hidden sm:flex m-auto"
            src={Logo}
            width={140}
            height={50}
            alt="logo"
            onClick={toHome}
          ></Image>
          <button onClick={talkToSales} className="sm:flex md:hidden hidden ml-56 mr-0 whitespace-nowrap border-2 border-secondary text-secondary my-[30px] px-[20px] py-[10px] rounded-full hover:bg-secondary hover:text-white transition-all duration-300 max-w-52">
            <p  className="text-center w-full m-auto">Talk To Sales</p>
          </button>
        </div>

        <div
          className="sm:hidden flex flex-col h-10 justify-around relative my-auto mx-6 "
          onClick={handleToggle}
        >
          <div
            className={`bg-black w-10 h-1 rounded-lg ${
              open ? "opacity-0" : "opacity-100"
            } transition-all duration-300`}
          />

          <div>
            <div
              className={`bg-black w-10 rounded-lg z-0 ${
                open ? "rotate-[-45deg] h-1" : ""
              } transition-all duration-300`}
            />
            <div
              className={`bg-black w-10 h-1 rounded-lg z-10 block ${
                open ? "rotate-[45deg]" : ""
              } transition-all duration-300`}
            />
          </div>

          <div
            className={`bg-black w-10 h-1 rounded-lg md:opacity-100 ${
              open ? "opacity-0" : "opacity-100"
            } transition-all duration-300`}
          />
        </div>
      </div>

      <span
        className={`flex flex-col m-auto sm:hidden w-[50%] justify-around transition-all duration-300 ${
          !open ? "opacity-0 translate-x-10 h-0" : "h-full opacity-100 "
        }`}
      >
        {Navlinks.map((link, index) => (
          <Link
          onClick={handleRedirection}
            className="my-[40px] w-full  px-auto text-center whitespace-nowrap text-primary"
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
        <button onClick={talkToSales} className="whitespace-nowrap text-bold border-2 border-secondary text-secondary my-[30px] px-[20px] py-[10px] rounded-full hover:bg-secondary hover:text-white transition-all duration-300 max-w-52 mx-auto">
          <strong>
            Talk To Sales
          </strong>
        </button>
      </span>
      <span
        className={`hidden max-w-[500px] m-auto sm:flex w-full justify-around transition-all duration-300`}
      >
        {Navlinks.map((link, index) => (
          <Link
            onClick={handleRedirection}
            className="my-[40px] w-full  px-auto text-center whitespace-nowrap text-primary"
            href={link.href}
            key={index}
          >
            {link.title}
          </Link>
        ))}
      </span>
      <button onClick={talkToSales} className="md:flex hidden whitespace-nowrap border-2 border-secondary text-secondary my-[30px] px-[20px] py-[10px] rounded-full hover:bg-secondary hover:text-white transition-all duration-300 max-w-52 mx-[8%]">
        <strong className="text-center w-full m-auto font-[600]">Talk To Sales</strong>
      </button>
    </div>
  );
}

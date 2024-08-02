import React from "react";
import "./CardStyle.css";
import SolutionCard from "./SolutionCard";
const SolutionsArray = [
  {
    title: "Brand Solutions",
    desc: "Reinvent your Brand. Strategy to lead in the next decade",
    icon: "assets/brand.svg",
    iconDark: "assets/brandDark.svg",
  },
  {
    title: "Media Solutions",
    desc: "Marketing for a multidimensional world.",
    icon: "assets/media.svg",
    iconDark: "assets/mediaDark.svg",
  },
  {
    title: "Data Solutions",
    desc: "Unlock powerful insights by tapping into data you didn't even know you had.",
    icon: "assets/data.svg",
    iconDark: "assets/dataDark.svg",
  },
  {
    title: "Tech Solutions",
    desc: "Emerging tech shapes the future",
    icon: "assets/tech.svg",
    iconDark: "assets/techDark.svg",
  },
];

export default function Solutions() {
  return (
    <div>
      <p className="w-[90%] m-auto text-center text-[#2e3224] text-5xl font-medium leading-normal ">
        Learn what Marqflare Solutions can do for you
      </p>
      <div className="w-[90%] my-10 mx-auto flex flex-col sm:hidden md:flex md:flex-row justify-around">
        {SolutionsArray.map((solution, index) => (
          <SolutionCard key={index} solution={solution} />
        ))}
      </div>
      <div className="w-[90%] my-10 mx-auto hidden sm:flex sm:flex-col md:hidden justify-around">
        <div className="flex flex-row">
          {SolutionsArray.map((solution, index) => {
            if (index < 2) {
              return <SolutionCard key={index} solution={solution} />;
            }
          })}
        </div>
        <div className="flex flex-row">
          {SolutionsArray.map((solution, index) => {
            if (index >= 2) {
              return <SolutionCard key={index} solution={solution} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

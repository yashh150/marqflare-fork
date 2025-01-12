"use client";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import { useRef } from "react";
import "./TrustStyle.css";
export default function Trust() {

  const reviews = [
    {
      name: "Chitra Surana",
      position: "Head - Marketing & Alliances @ Inkspell Solutions",
      img: "assets/chitra.svg",
      review: "Marqflare transformed our business with expert \ntracking, data analysis, user funnel optimisation, and \nconversion tracking. Their growth-driven marketing \nsolutions and attribution modelling have significantly \nboosted our performance and ROI."
    },
    {
      name: "Ayush Panwar",
      position: "Assistant Vice President - Social+ @ Rusk Media",
      img: "assets/ayyush.svg",
      review:
        "Marqflare supercharged our business with targeted \ndata analysis, audience segmentation, and cohort \ninsights. Their expertise in user retention, conversion \ntracking, and funnel optimisation has led to \nsignificant growth in ROI and customer acquisition."
    },
    {
      name: "Naitri Shah",
      position: "Assistant Vice President - Social+ @ Rusk Media \nProduct Manager @ Kokuyo Camlin",
      img: "assets/naitru.svg",
      review:
        "Marqflare expertly strategised, executed, and optimised our \ncampaigns to reduce cart abandonment rates and increase \nCLTV. Their focus on improving average order value and \nconversion rates significantly boosted engagement & sales."
    },
  ]

  const HorizontalScroll = useRef(null);
  const onLeft = () => {
    HorizontalScroll.current.scrollBy({ left: -1000, behavior: "smooth" });
  };
  const onRight = () => {
    HorizontalScroll.current.scrollBy({ left: 1000, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col mt-[134px] max-w-[1400px] mx-auto mb-[135px]">
      <div className="flex flex-col">
        <h1 className="w-[90%] m-auto text-center text-primary text-3xl md:text-[3rem] font-semibold leading-normal">
          Who trusted us
        </h1>
        <p className="md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-normal leading-normal">
          Our clients and partners trust us for innovative solutions that
          deliver results, <br />
          empowering businesses of all sizes to grow successfully.
        </p>
      </div>
      <div className="flex flex-row m-auto w-full justify-between">
        <Image
          className="w-5 sm:mx-7 mx-1"
          src="assets/leftArrow.svg"
          width={10}
          height={10}
          alt="logo"
          onClick={onLeft}
        />

        <div
          ref={HorizontalScroll}
          className="flex flex-1 flex-row overflow-scroll w-1/2 no-scrollbar"
        >
          <ReviewCard props={reviews[0]}/>
          <ReviewCard props={reviews[1]}/>
          <ReviewCard props={reviews[2]}/>
          
        </div>
        <Image
          className="w-5 sm:mx-7 mx-1"
          src="assets/rightArrow.svg"
          width={10}
          height={10}
          alt="logo"
          onClick={onRight}
        />
      </div>
    </div>
  );
}

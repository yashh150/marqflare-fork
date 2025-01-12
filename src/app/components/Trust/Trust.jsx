"use client";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import { useRef } from "react";
import "./TrustStyle.css";
export default function Trust() {
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
      <div className="flex flex-row m-auto w-[95%] justify-between">
        <Image
          className="w-5 sm:mx-10 mx-1"
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
          <div className="flex flex-col my-10  m-5 ">
            <div className="w-[114px]  h-[114px] bg-[#d9d9d9] rounded-full border-2 mb-[-57px] z-10 border-white m-auto">
              <Image
                src="assets/chitra.svg"
                width={115}
                height={50}
                alt="logo"
                className="m-auto"
              ></Image>
            </div>

            <div className="w-[520px] h-[300px] bg-[#d2d8c5] rounded-[10px] m-auto z-0 p-[60px] ">
              <div>
                <span class="text-[#464b37] text-[22px] font-semibold leading-normal tracking-tight">
                  Chitra Surana
                  <br />
                </span>
                <span class="text-[#464b37] text-lg font-normal leading-normal tracking-tight">
                  Head - Marketing & Alliances @ Inkspell Solutions
                  <br />
                </span>
                <span class="text-[#464b37] text-lg font-normal  leading-4 tracking-tight">
                  <br />
                  Marqflare transformed our business with expert
                  <br />
                  tracking, data analysis, user funnel optimisation, and
                  <br />
                  conversion tracking.Their growth-driven marketing
                  <br />
                  solutions and attribution modelling have significantly
                  <br />
                  boosted our performance and ROI.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-10  m-5 ">
            <div className="w-[114px]  h-[114px] bg-[#d9d9d9] rounded-full border-2 mb-[-57px] z-10 border-white m-auto">
              <Image
                src="assets/ayyush.svg"
                width={115}
                height={50}
                alt="logo"
                className="m-auto"
              ></Image>
            </div>

            <div className="w-[520px] h-[300px] bg-[#d2d8c5] rounded-[10px] m-auto z-0 p-[60px] ">
              <div class="w-[470.83px]">
                <span class="text-[#464b37] text-[22px] font-semibold leading-normal tracking-tight">
                  Ayush Panwar
                  <br />
                </span>
                <span class="text-[#464b37] text-lg font-normal leading-normal tracking-tight">
                  Assistant Vice President - Social+ @ Rusk Media
                  <br />
                  <br />
                  Marqflare supercharged our business with targeted data
                  analysis, audience segmentation, and cohort insights. Their
                  expertise in user retention, conversion tracking, and funnel
                  optimisation has led to significant growth in ROI and customer
                  acquisition.
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-10  m-5 ">
            <div className="w-[114px]  h-[114px] bg-[#d9d9d9] rounded-full border-2 mb-[-57px] z-10 border-white m-auto">
              <Image
                src="assets/naitru.svg"
                width={115}
                height={50}
                alt="logo"
                className="m-auto"
              ></Image>
            </div>

            <div className="w-[520px] h-[300px] bg-[#d2d8c5] rounded-[10px] m-auto z-0 p-[60px] ">
              <div>
                <span class="text-[#464b37] text-[22px] font-semibold leading-normal tracking-tight">
                  Chitra Surana
                  <br />
                </span>
                <span class="text-[#464b37] text-lg font-normal leading-normal tracking-tight">
                  Head - Marketing & Alliances @ Inkspell Solutions
                  <br />
                </span>
                <span class="text-[#464b37] text-lg font-normal  leading-4 tracking-tight">
                  <br />
                  Marqflare transformed our business with expert
                  <br />
                  tracking, data analysis, user funnel optimisation, and
                  <br />
                  conversion tracking.Their growth-driven marketing
                  <br />
                  solutions and attribution modelling have significantly
                  <br />
                  boosted our performance and ROI.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-5 sm:mx-10 mx-1"
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Intro from "./Intro";
import SearchBar from "./SearchBar";
import Style from "../../styles/loveTravel.module.scss";

export default function IntroWithSearch() {
  return (
    <>
      <section className=" relative w-full py-[100px] bg-[#f2f2f2] ">
        {/* <Intro /> */}
        <div className={`${Style.container}`}>
          <div className="intro_wrap relative  w-full max-w-[810px] text-center mx-auto ">
            <h6 className=" font-reenieBeanie text-[30px] text-[#1bbc9b] font-semibold leading-[1.2] mb-5 ">
              Choose your Trip
            </h6>
            <h2 className=" text-[35px] text-black font-bold leading-[1.3] mb-5 ">
              Start your Vacation Now
            </h2>
            <p className="text-[16px] text-[#6E6E6E] mb-5 ">
              Looking for your dream vacation destination but don't know where
              to start? With the help of experienced and knowledgeable travel
              agents, you can plan the trip of a lifetime with ease.
            </p>
          </div>
        </div>
        <SearchBar />
      </section>
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Intro from "./Intro";
import SearchBar from "./SearchBar";
import Style from "../../styles/loveTravel.module.scss";
import { intro4 } from "../../public/data/loveTravelData";

export default function IntroWithSearch() {
  return (
    <>
      <section className=" relative w-full py-[100px] bg-[#f2f2f2] ">
        <Intro data={intro4} />
        <div className={`${Style.container}`}>
          <SearchBar
            SearchBarClass=" mt-[60px]"
            buttonClass="!bg-[#F76570]"
            iconSearch="/loveTravel/icon-search-orange.svg"
            iconLocation="/loveTravel/icon-location-orange.png"
            iconWorld="/loveTravel/icon-bulleted-list.png"
          />
        </div>
      </section>
    </>
  );
}

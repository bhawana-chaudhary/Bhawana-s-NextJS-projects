import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

export default function Intro() {
  return (
    <>
      <section className=" intro relative w-full pt-[200px] ">
        <div className="bgImage_wrap absolute top-[194px] right-0 w-full max-w-[884px] opacity-[0.2] ">
          <Image
            src="/loveTravel/bannerBgImg.png"
            width={1000}
            height={900}
            alt="bg-img"
          />
        </div>
        <div className={`${Style.container}`}>
          <div className="intro_wrap relative w-[50%] text-left ">
            <h6 className=" font-reenieBeanie text-[30px] text-[#1bbc9b] font-semibold leading-[1.2] mb-5 ">
              Dream Vacation Destination
            </h6>
            <h2 className=" text-[50px] text-black font-bold leading-[1.3] mb-5 ">
              Plan the Trip of a Lifetime with Ease
            </h2>
            <p className="text-[16px] text-[#6E6E6E] mb-5 ">
              Whether you're looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </p>
            <Link
              href="/"
              className={`${Style.button_default} ${Style.button_default2}`}
            >
              More Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

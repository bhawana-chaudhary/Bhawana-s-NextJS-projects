import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/loveTravel.module.scss";
import SearchBar from "./SearchBar";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const imageWrap1Ref = useRef(null);
  const imageWrap2Ref = useRef(null);
  const bottomSearchWrapRef = useRef(null);

  useEffect(() => {
    gsap.to(imageWrap1Ref.current, {
      y: 200,
      scrollTrigger: {
        trigger: imageWrap1Ref.current,
        start: "top 150",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(imageWrap2Ref.current, {
      y: -200,
      scrollTrigger: {
        trigger: imageWrap2Ref.current,
        start: "top 250",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(bottomSearchWrapRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: bottomSearchWrapRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <section className=" relative w-full pt-[120px] pb-[100px] bg-[#F2F2F2] min-h-[1030px] overflow-visible flex items-end z-[5] ">
        <div className="bg_img absolute top-[80px] left-0 w-full min-h-[1150px] opacity-[0.15] bg-[url('/loveTravel/bannerBgImg.png')] bg-contain bg-repeat-x "></div>
        <div className={`${Style.container}`}>
          <div className="imageWithContent relative w-full flex justify-between ">
            <div className="banner_content w-full max-w-[510px] mt-[60px] mr-5 ">
              <div className="content relative w-full z-[1] ">
                <h6 className=" text-[16px] text-[#7a7a7a] mb-5 ">
                  LOVE TRAVEL THEME
                </h6>
                <h1 className=" text-[72px] text-black leading-[1.2] font-bold ">
                  <span className=" relative after:content-[''] after:absolute after:bottom-[20px] after:left-0 after:w-full after:h-[10px] after:bg-[#FFd205] after:z-[-1]  ">
                    Adventure
                  </span>{" "}
                  & Experience The Travel !
                </h1>
              </div>
              <SearchBar
                ref={bottomSearchWrapRef}
                SearchBarClass=" min-w-[1228px] mt-[60px] z-10 "
                iconSearch="/loveTravel/icon-search.svg"
                iconLocation="/loveTravel/icon-location-2.png"
                iconWorld="/loveTravel/icon-world.png"
              />
            </div>
            <div className="bannerImageWrap relative w-full max-w-[780px] flex mr-8 ">
              <div
                ref={imageWrap1Ref}
                className="imageWrap relative w-[calc(100%-15px)] h-[700px] rounded-[400px] overflow-hidden "
              >
                <Image
                  src="/loveTravel/bannerParallax_img1.jpeg"
                  width={400}
                  height={700}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div
                ref={imageWrap2Ref}
                className="imageWrap relative w-[calc(100%-15px)] h-[700px] rounded-[400px] overflow-hidden ml-[30px] top-[150px] "
              >
                <Image
                  src="/loveTravel/bannerParallax_img2.jpeg"
                  width={400}
                  height={700}
                  alt="img"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

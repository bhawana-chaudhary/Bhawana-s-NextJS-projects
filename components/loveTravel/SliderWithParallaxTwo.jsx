import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/loveTravel.module.scss";
import Intro from "./Intro";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrows";
import { intro5 } from "../../public/data/loveTravelData";

export default function SliderWithParallaxTwo({ data }) {
  const parallaxImgWrapRef = useRef(null);
  const introSideImageRef = useRef(null);
  useEffect(() => {
    gsap.to(parallaxImgWrapRef.current, {
      y: -200,
      scrollTrigger: {
        trigger: parallaxImgWrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(introSideImageRef.current, {
      x: -200,
      scrollTrigger: {
        trigger: introSideImageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  return (
    <>
      <section className=" sliderWithParallaxTwo relative w-full py-[120px] overflow-hidden ">
        <div
          className={`bg_image absolute top-0 left-0 w-[100vw] h-[100vh] z-[-3] ${Style.black_overlayTwo}`}
          ref={parallaxImgWrapRef}
        >
          <Image
            src={data?.parallaxImg}
            layout="fill"
            objectFit="cover"
            alt="bg-img"
            className=" w-full h-full object-cover object-center "
          />
        </div>

        <div className={`${Style.container}`}>
          <div className="introWithImg w-full flex justify-between ">
            <Intro data={intro5} />
            <div
              className="introSideImage relative w-[150px] h-[150px] rounded-[50%] overflow-hidden ml-8 opacity-[1] transition-opacity ease-in-out duration-500 hover:opacity-[0.7] "
              ref={introSideImageRef}
            >
              <Image
                src={data?.introSideImg}
                width={500}
                height={500}
                alt="side-img"
                className=" w-full h-full object-cover "
              />
            </div>
          </div>
          <div className="logo_slider relative w-full overflow-hidden  ">
            <Slider
              {...settings}
              className=" relative w-[calc(100%+40px)] ml-[-40px] "
            >
              {data?.sliderImageData.map((sliderItem, index) => (
                <div
                  className="sliderCard !w-[calc(100%-40px)] mx-[40px]  p-[50px] bg-[#1bbc9b] rounded-[15px] "
                  key={index}
                >
                  <div className="card_content relative w-full ">
                    <h3 className=" text-white text-[25px] leading-[1.5] ">
                      {sliderItem.cardTitle}
                    </h3>
                  </div>
                  <div className="cardBottomContent relative w-full flex mt-6 ">
                    <div className="smallImage w-[45px] h-[45px] rounded-[50%] overflow-hidden ">
                      <Image
                        src={sliderItem?.smallImg}
                        width={500}
                        height={500}
                        alt="img"
                        className=" w-full h-full object-cover "
                      />
                    </div>
                    <div className="imgDetailWrap relative w-[calc(100%-45px)] pl-5 ">
                      <h6 className=" text-white text-[16px] font-bold leading-[1.5] ">
                        {sliderItem?.bottomTitle}
                      </h6>
                      <p className=" text-white text-[14px] font-normal leading-[1.5] ">
                        {sliderItem?.bottomParagraph}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <style jsx>{`
        // :global(.slider_wrapper .slick-slide) {
        //   width: calc(100% - 40px) !important;
        //   margin: 0 30px !important;
        // }
        // :global(.slick-current) {
        // 	transform: translateY(-4.7%);
        // 	width: 34% !important; /* Adjust width here */
        // 	transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
        // }
      `}</style>
    </>
  );
}

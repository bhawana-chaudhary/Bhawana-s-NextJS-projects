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
import { intro3 } from "../../public/data/loveTravelData";

export default function SliderWithParallax({ data }) {
  const imageWrap2Ref = useRef(null);
  useEffect(() => {
    gsap.to(imageWrap2Ref.current, {
      y: -200,
      scrollTrigger: {
        trigger: imageWrap2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <section className=" sliderWithParallax relative w-full py-[120px] ">
        <div
          className={`bg_image absolute top-0 left-0 w-[100vw] h-[100vh] z-[-3] ${Style.black_overlay}`}
          ref={imageWrap2Ref}
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
          <div className="sliderWithIntro relative w-full flex ">
            <div className="sliderWrapper relative w-full max-w-[610px] mr-[100px] z-[1] ">
              <Slider {...settings}>
                {data?.sliderImageData.map((sliderItem, index) => (
                  <div
                    className="sliderImage w-full h-[600px] overflow-hidden "
                    key={index}
                  >
                    <Image
                      src={sliderItem.sliderImg}
                      width={900}
                      height={1200}
                      alt="img"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <Intro data={intro3} />
          </div>
        </div>
      </section>
    </>
  );
}

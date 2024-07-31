import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const IntroWithVideo = ({ data }) => {
  const introTextWrapRef = useRef(null);
  const videoWrapRef = useRef(null);

  useEffect(() => {
    gsap.to(introTextWrapRef.current, {
      scale: 1,
      scrollTrigger: {
        trigger: introTextWrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(videoWrapRef.current, {
      scale: 1.3,
      scrollTrigger: {
        trigger: videoWrapRef.current,
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <>
      <section className="introWithVideo relative w-full py-[120px] ">
        <div className={`${Style.container}`}>
          <div className="intro relative w-full text-center ">
            <h2
              className=" text-[100px] font-bold text-black leading-[1.2em] transform scale-[1.4] "
              ref={introTextWrapRef}
            >
              Travel Itineraries
            </h2>
          </div>
          <div
            className="video_wrapper w-full h-full max-h-[650px] my-[120px]  transform scale-[1] px-[7px] "
            ref={videoWrapRef}
          >
            <iframe
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Love Travel City Tour Demo"
              width="640"
              height="1000"
              src="https://www.youtube.com/embed/LIgWlfeMdVE?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Ftravel.nicdark.com&widgetid=1&autoplay=1&loop=1&mute=1&playlist=LIgWlfeMdVE&modestbranding=1"
              style={{ maxHeight: "inherit" }}
              className=" w-full object-cover object-center "
            ></iframe>
          </div>
          <div className="logo_slider relative w-full mt-16 ">
            <Slider {...settings}>
              {data?.logoSliderData.map((logoItem, index) => (
                <div
                  className="logo_wrap w-[calc(20%-20px)] mx-[10px] "
                  key={index}
                >
                  <div className="logo max-w-[264px] h-[85px] mx-auto ">
                    <Image
                      src={logoItem.logoImg}
                      width={300}
                      height={100}
                      alt={logoItem.logoAlt}
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default IntroWithVideo;

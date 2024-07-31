import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";
import Intro from "./Intro";
import { intro7 } from "../../public/data/loveTravelData";
import gsap from "gsap";

export default function IntroWithImage() {
  const introImageRef = useRef(null);
  useEffect(() => {
    gsap.to(introImageRef.current, {
      x: -100,
      scrollTrigger: {
        trigger: introImageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <section className=" IntroWithImage relative w-full py-[120px] ">
        <div className={`${Style.container}`}>
          <div className=" relative w-full flex flex-wrap ">
            <Intro data={intro7} />
            <div className="imageWrap relative w-[calc(50%-45px)] ml-[90px] ">
              <div
                className="image relative right-[-30px] w-full h-[500px] rounded-tl-[50%] rounded-bl-[50%] overflow-hidden "
                ref={introImageRef}
              >
                <Image
                  src="/loveTravel/bannerParallax_img2.jpeg"
                  width={1500}
                  height={1000}
                  alt="img"
                  className=" w-full h-full object-cover object-center "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

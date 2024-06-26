import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/loveTravel.module.scss";

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
      <section className=" relative w-full pt-[120px] pb-[100px] bg-[#F2F2F2] min-h-[1030px] overflow-visible flex items-end ">
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
              <div
                ref={bottomSearchWrapRef}
                className="bottom_searchWrap relative min-w-[1228px] bg-white py-5 px-6 mt-[60px] rounded-[15px] z-10 "
                style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)" }}
              >
                <form action="" className=" relative flex justify-between ">
                  <div className="wrap relative w-full max-w-[230px] px-6 flex items-center mr-8 ">
                    <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                      <Image
                        src="/loveTravel/icon-search.svg"
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="inputWrap w-[calc(100%-40px)] ">
                      <label
                        htmlFor="search"
                        className=" text-[16px] font-bold text-black "
                      >
                        Search
                      </label>
                      <input
                        type="search"
                        placeholder="Insert keyword"
                        id="search"
                        className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                      />
                    </div>
                  </div>
                  <div className="wrap relative w-full max-w-[230px] px-6 flex items-center border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
                    <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                      <Image
                        src="/loveTravel/icon-location.png"
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="inputWrap w-[calc(100%-40px)] ">
                      <label
                        htmlFor="destinations"
                        className=" text-[16px] font-bold text-black "
                      >
                        Destinations
                      </label>
                      <select
                        name="destinations"
                        id="destinations"
                        className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                      >
                        <option value="0">All Destinations</option>
                        <option value="1">Africa</option>
                        <option value="2"> - Egypt</option>
                        <option value="3">Europe</option>
                        <option value="4"> - Greece</option>
                        <option value="5"> - France</option>
                        <option value="6"> - Italy</option>
                        <option value="7">Asia</option>
                        <option value="8"> - Thailand</option>
                        <option value="9"> - Japan</option>
                        <option value="10">U.S.A</option>
                        <option value="11"> - California</option>
                      </select>
                    </div>
                  </div>
                  <div className="wrap relative w-full max-w-[230px] px-6 flex items-center  border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
                    <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                      <Image
                        src="/loveTravel/icon-world.png"
                        width={40}
                        height={40}
                        alt="icon"
                      />
                    </div>
                    <div className="inputWrap w-[calc(100%-40px)] ">
                      <label
                        htmlFor="typologies"
                        className=" text-[16px] font-bold text-black "
                      >
                        Typologies
                      </label>
                      <select
                        name="typologies"
                        id="typologies"
                        className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                      >
                        <option value="0">All Typologies</option>
                        <option value="1">Sports Activities</option>
                        <option value="2">Family-Friendly</option>
                        <option value="3">Heritage Tours</option>
                        <option value="4">Road Trips</option>
                        <option value="5">Budget Travel</option>
                        <option value="6">Culinary Tourism</option>
                        <option value="7">Eco-tourism</option>
                        <option value="8">Adventure Travel</option>
                        <option value="9">Beach Holidays</option>
                        <option value="10">Cultural Tours</option>
                      </select>
                    </div>
                  </div>
                  <div className="wrap relative w-full max-w-[266px] ">
                    <button
                      type="Submit"
                      value="SEARCH"
                      className={`${Style.button_default} w-full !p-6 !rounded-[10px] `}
                    >
                      SEARCH
                    </button>
                  </div>
                </form>
              </div>
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

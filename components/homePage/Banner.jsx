import React, { useState, useRef } from "react";
import Image from "next/image";
import Style from "../../styles/homePage.module.scss";
import { useEffect } from "react";
import anime from "animejs";
import gsap from "gsap";
import Link from "next/link";

const asliBannerImgData = [
  {
    id: 1,
    imgUrl: "/homePage/cover_img1.webp",
    listText: "Endless Summer",
    mainTitle: "Endless Summer",
  },
  {
    id: 2,
    imgUrl: "/homePage/cover_img2.webp",
    listText: "Knight Riders",
    mainTitle: "Knight Riders",
  },
  {
    id: 3,
    imgUrl: "/homePage/cover_img3.webp",
    listText: "Handmade Shop",
    mainTitle: "Handmade Shop",
  },
  {
    id: 4,
    imgUrl: "/homePage/cover_img4.webp",
    listText: "Working Remotely",
    mainTitle: "Working Remotely",
  },
  {
    id: 5,
    videoUrl: "/homePage/cover_img5.mp4",
    listText: "Island Adventure",
    mainTitle: "Island Adventure",
  },
];

const spanText = (textElement) => {
  const string = textElement.innerText;
  let spaned = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      spaned += string[i];
    } else {
      spaned += `<span>${string[i]}</span>`;
    }
  }
  textElement.innerHTML = spaned;
};

export default function Banner({ setIsTitleHovered, setBannerButtonHovered }) {
  // ---------tab--
  // const [selectedBanner, setSelectedBanner] = useState(asliBannerImgData[0]);
  // const handleBannerClick = (banner) => {
  //   setSelectedBanner(banner);
  // };
  // ---------tab--

  const [selectedBanner, setSelectedBanner] = useState(asliBannerImgData[0]);
  const [animationDirection, setAnimationDirection] = useState("in");
  const handleBannerClick = (banner) => {
    setAnimationDirection("out");
    setTimeout(() => {
      setSelectedBanner(banner);
      setAnimationDirection("in");
    }, 1300);

    circleSvgRefs.current.forEach((circle) => {
      if (circle) {
        gsap.killTweensOf(circle);
        circle.style.visibility = "hidden";
        circle.style.strokeDashoffset = 520;
      }
    });
    circleSvgOuterRefs.current.forEach((circleOuter) => {
      if (circleOuter) {
        gsap.killTweensOf(circleOuter);
        circleOuter.style.transform = "rotate(0deg)";
      }
    });
  };

  // -------bannerText---
  const headlineRef = useRef(null);
  // useEffect(() => {
  //   if (headlineRef.current) {
  //     spanText(headlineRef.current);
  //     const spans = headlineRef.current.querySelectorAll("span");
  //     spans.forEach((span) => {
  //       span.style.animation = "none";
  //       span.offsetHeight; // Trigger reflow
  //       span.style.animation = "";
  //     });
  //   }
  // }, [selectedBanner]);

  useEffect(() => {
    if (headlineRef.current) {
      spanText(headlineRef.current);
      const spans = headlineRef.current.querySelectorAll("span");
      spans.forEach((span) => {
        span.style.animation = "none";
        span.offsetHeight;
        span.style.animation = "";
      });
      headlineRef.current.classList.remove(Style["textIn"], Style["textOut"]);
      headlineRef.current.classList.add(
        animationDirection === "in" ? Style.textIn : Style.textOut
      );
    }
  }, [selectedBanner, animationDirection]);
  // -------bannerText---

  // -------autoTab-----
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = asliBannerImgData.findIndex(
        (banner) => banner.id === selectedBanner.id
      );
      const nextIndex = (currentIndex + 1) % asliBannerImgData.length;
      handleBannerClick(asliBannerImgData[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedBanner]);
  // -------autoTab-----

  const circleSvgRefs = useRef([]);
  const circleSvgOuterRefs = useRef([]);
  useEffect(() => {
    const duration = 26; // Duration of the tab animation in seconds
    asliBannerImgData.forEach((banner) => {
      const currentCircle = circleSvgRefs.current[banner.id - 1];
      const currentCircleOuter = circleSvgOuterRefs.current[banner.id - 1];

      circleSvgRefs.current.forEach((circle, index) => {
        if (index !== selectedBanner.id - 1 && circle) {
          circle.style.visibility = "hidden";
        }
      });

      if (currentCircle && currentCircleOuter) {
        if (banner === selectedBanner && animationDirection === "in") {
          currentCircle.style.visibility = "visible";
          gsap.to(currentCircle, {
            strokeDashoffset: 0,
            duration: duration,
            ease: "power1.inOut",
          });
          gsap.to(currentCircleOuter, {
            rotation: 180,
            duration: duration,
            ease: "power1.inOut",
          });
        } else {
          gsap.to(currentCircle, {
            strokeDashoffset: 520,
            duration: duration,
            ease: "power1.inOut",
            onComplete: () => {
              currentCircle.style.visibility = "hidden";
            },
          });
          gsap.to(currentCircleOuter, {
            rotation: 0,
            duration: duration,
            ease: "power1.inOut",
          });
        }
      }
    });
  }, [selectedBanner, animationDirection]);

  // ------------

  const handleMouseEnter = () => setBannerButtonHovered(true);
  const handleMouseLeave = () => setBannerButtonHovered(false);

  return (
    <>
      <section className="asliBanner relative w-full min-h-[100vh] py-24 flex items-end px-28 overflow-hidden desktop:px-20 desktop:py-14 lg:py-7 lg:px-5 ">
        <div
          className={`banner_bgWrap absolute top-0 right-0 w-full h-full bg-black `}
        >
          <div
            className={`${
              Style.img_wrapper_overlay
            } img_wrapper absolute top-[50%] right-0 transform translate-y-[-50%] w-[125vh] h-[125vh] rounded-s-[50%] overflow-hidden xxl-up:w-[130vh] xxl-up:h-[130vh] desktopLarge:w-[110vh] desktopLarge:h-[110vh] xl:w-[90vw] xl:h-[100vh] md:w-[100vh] md:h-[100vh] md:right-auto md:left-0  ${
              animationDirection === "in"
                ? Style.imgOverlayIn
                : Style.imgOverlay
            } `}
          >
            {selectedBanner.imgUrl && (
              <Image
                src={selectedBanner.imgUrl}
                width={2500}
                height={2000}
                alt="img"
                // loading="lazy"
                priority={true}
                className=" w-full h-full object-cover object-center "
              />
            )}
            {selectedBanner.videoUrl && (
              <video
                src={selectedBanner.videoUrl}
                autoplay=""
                loop
                muted
                className=" w-full h-full object-cover  object-center "
              ></video>
            )}
          </div>
        </div>

        <div className="banner_content relative w-full z-10 ">
          <div className=" relative w-full flex flex-wrap justify-between  mb-16 lg:block desktop:mb-10 lg:mb-6 ">
            <div className=" relative  w-[calc(100%-169px)] lg:w-full ">
              <div
                className={`${Style.bannerMainContent} relative w-fit bannerMainContent `}
                onMouseEnter={() => setIsTitleHovered(true)}
                onMouseLeave={() => setIsTitleHovered(false)}
              >
                <Link href="/" className={`${Style.redirect_link}`}>
                  .
                </Link>
                {selectedBanner.mainTitle && (
                  <h1
                    className={`${Style.main_title} swift-up-text text-[154px] leading-[1.3] text-[#fdf9cf] font-nanumMyeongjo font-medium cursor-none desktopLarge:text-[110px] desktop:text-[80px] tablet:text-[65px] phablet:text-[52px] sm:text-[38px] `}
                    ref={headlineRef}
                  >
                    {selectedBanner.mainTitle}
                  </h1>
                )}
              </div>
            </div>
            <div
              className=" relative group w-full max-w-[169px] h-[169px] border-solid border-[2px] border-white rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out desktopLarge:max-w-[150px] desktopLarge:h-[150px] desktop:max-w-[140px] desktop:h-[140px] lg:mt-5 lg:max-w-[120px] lg:h-[120px] "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/" className={`${Style.redirect_link}`}>
                .
              </Link>
              <span className=" text-[16px] text-white font-nunitoSans group-hover:text-[#fdf9cf] tablet:text-[15px] md:text-[14px] ">
                Explore Project
              </span>
            </div>
          </div>
          <div className="listWrapper">
            <ul className=" list-disc pl-5 ">
              {asliBannerImgData.map((bannerBg, index) => (
                <li
                  key={index}
                  className={` relative text-[16px] py-1 mb-2 pl-5 cursor-pointer opacity-[0.6] transition-opacity duration-300 ease-in-out hover:opacity-[1] lg:text-[14px] ${
                    selectedBanner.id === bannerBg.id
                      ? " opacity-[1] text-[#fdf9cf] "
                      : " text-white "
                  }`}
                  onClick={() => handleBannerClick(bannerBg)}
                >
                  <span className=" font-nunitoSans font-semibold tracking-[0.8px] ">
                    {bannerBg.listText}
                  </span>
                  <div
                    className={` ${Style.circleSvgImg} circleSvgImg absolute  top-0 left-[-28px]  w-full max-w-[35px] h-full max-h-[35px]  lg:max-w-[30px] lg:max-h-[30px] lg:left-[-25px] `}
                    ref={(el) => {
                      if (el) {
                        circleSvgRefs.current[index] =
                          el.querySelector("circle");
                        circleSvgOuterRefs.current[index] = el;
                      }
                    }}
                  >
                    <svg
                      height="100%"
                      width="100%"
                      xmlns="http://www.w3.org/2001/svg"
                      className={` ${Style.circleSvg} circleSvg relative  `}
                    >
                      <circle
                        r="46%"
                        cx="50%"
                        cy="50%"
                        stroke="#fdf9cf"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={520}
                        strokeDashoffset={520}
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

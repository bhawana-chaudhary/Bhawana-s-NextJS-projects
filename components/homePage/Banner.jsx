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

export default function Banner({ setIsTitleHovered }) {
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

    // Iterate over each tab and initialize the animation for the corresponding circle
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

  return (
    <>
      <section className="asliBanner relative w-full min-h-[100vh] py-24 flex items-end px-28 overflow-hidden ">
        <div
          className={`banner_bgWrap absolute top-0 right-0 w-full h-full bg-black `}
        >
          <div
            className={`${
              Style.img_wrapper_overlay
            } img_wrapper absolute top-[50%] right-0 transform translate-y-[-50%] w-[78vw] h-[78vw] rounded-s-[50%] overflow-hidden  ${
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

        <div className="banner_content z-10 ">
          <div
            className={`${Style.bannerMainContent} relative bannerMainContent mb-16 `}
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <Link href="/" className={`${Style.redirect_link}`}>
              .
            </Link>
            {selectedBanner.mainTitle && (
              <h1
                className={`${Style.main_title} swift-up-text text-[154px] leading-[1.3] text-[#fdf9cf] font-nanumMyeongjo font-medium cursor-none `}
                ref={headlineRef}
              >
                {selectedBanner.mainTitle}
              </h1>
            )}
          </div>
          <div className="listWrapper">
            <ul className=" list-disc pl-5 ">
              {asliBannerImgData.map((bannerBg, index) => (
                <li
                  key={index}
                  className={` relative text-[16px] py-1 mb-2 pl-5 cursor-pointer opacity-[0.6] transition-opacity duration-300 ease-in-out hover:opacity-[1] ${
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
                    className={` ${Style.circleSvgImg} circleSvgImg absolute  top-0 left-[-28px]  w-full max-w-[35px] h-full max-h-[35px]`}
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

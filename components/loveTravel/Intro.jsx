import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro({ data }) {
  // const progressBarRef = useRef(null);

  const progressBarRef = useRef([]);

  useEffect(() => {
    progressBarRef.current.forEach((progressRef, index) => {
      if (progressRef) {
        const progressValue = data?.listContent[index]?.progressValue || 0;
        gsap.fromTo(
          progressRef,
          { value: 0 },
          {
            value: progressValue,
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: progressRef,
              start: "top bottom",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, [data]);

  return (
    <>
      <section
        className={`intro relative ${data?.introWidth} ${data?.bgColor} ${
          data.introLargPadding ? " pt-[200px]" : " pt-[100px]"
        } ${data.introNoPadding === true ? " !p-0" : ""} `}
      >
        {data?.introBgImg && (
          <div className="bgImage_wrap absolute top-[194px] right-0 w-full max-w-[884px] opacity-[0.2] ">
            <Image
              src={data.introBgImg}
              width={1000}
              height={900}
              alt="bg-img"
            />
          </div>
        )}
        <div
          className={` ${
            data?.withOutContainer === true ? "" : Style.container
          } `}
        >
          <div
            className={`intro_wrap relative w-full max-w-[810px] ${
              data?.textAlign
            } ${data?.textAlign === "text-center" ? "mx-auto" : ""} `}
          >
            {data?.subTitle && (
              <h6
                className={`font-reenieBeanie text-[30px] font-semibold leading-[1.2] mb-5 ${
                  data?.textWhite === true ? "text-white" : " text-[#1bbc9b]"
                } `}
              >
                {data.subTitle}
              </h6>
            )}
            {data?.introTitle && (
              <h2
                className={`text-[50px] font-bold leading-[1.3] mb-5  ${
                  data?.textWhite === true ? "text-white" : " text-black"
                } ${data?.titleSmall === true ? "!text-[35px]" : ""} `}
              >
                {data.introTitle}
              </h2>
            )}
            {data?.paragraph && (
              <p
                className={`text-[16px]   ${
                  data?.textWhite === true ? "text-white" : " text-[#6E6E6E]"
                }`}
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            )}
            {data?.listContent && (
              <ul className=" list-none mt-10 ">
                {data?.listContent.map((listText, index) => (
                  <li
                    key={index}
                    className={`text-[16px] ${
                      data?.textWhite === true
                        ? "text-white"
                        : " text-[#6E6E6E]"
                    } ${
                      listText?.bottomLine === true ? Style.listBottomLine : ""
                    } ${
                      Style.animate_bottomLine
                    }  pb-5 mb-5 relative flex items-center `}
                  >
                    {listText.progressValue && (
                      <progress
                        className={`${Style.progress} progress absolute bottom-0 left-0 w-full h-[5px] rounded-[2px] overflow-hidden `}
                        ref={(el) => (progressBarRef.current[index] = el)}
                        value={listText.progressValue || 0}
                        max="100"
                      ></progress>
                    )}
                    {listText.listIcon && (
                      <div className=" relative max-w-[15px] h-[15px] mr-5 ">
                        <Image
                          src={listText.listIcon}
                          width={50}
                          height={50}
                          alt="icon"
                          className=" w-full h-full object-contain "
                        />
                      </div>
                    )}
                    <span>{listText.listItem}</span>
                  </li>
                ))}
              </ul>
            )}
            {data?.buttonText && (
              <Link
                href={data?.buttonUrl}
                className={`${Style.button_default} ${
                  data?.btnHoverOut === true ? Style.button_default2 : ""
                }  mt-5 `}
              >
                {data?.buttonText}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

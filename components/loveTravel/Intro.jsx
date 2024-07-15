import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

export default function Intro({ data }) {
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
                    } pb-5 mb-5 relative flex items-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#FFFFFF2E] last-of-type:after:hidden last-of-type:mb-0 `}
                  >
                    <div className=" relative max-w-[15px] h-[15px] mr-5 ">
                      <Image
                        src={listText.listIcon}
                        width={50}
                        height={50}
                        alt="icon"
                        className=" w-full h-full object-contain "
                      />
                    </div>
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

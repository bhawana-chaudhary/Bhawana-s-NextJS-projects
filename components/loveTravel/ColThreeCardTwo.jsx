import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ColThreeCardTwo({ data }) {
  const colThreeRef = useRef(null);
  useEffect(() => {
    gsap.to(colThreeRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: colThreeRef.current,
        start: "center bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <section className=" colThreeCard relative w-full bg-white pb-[100px] pt-[60px] ">
        <div className={`${Style.container}`}>
          <div className="colThree_wrap relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap ">
            {data?.map((colThreeCard, index) => (
              <div
                ref={index === 1 ? colThreeRef : null}
                className={`colThree relative w-[calc(33.33%-30px)] mx-[15px] rounded-[15px] overflow-hidden mb-5 ${colThreeCard?.bgColor} py-[70px] px-[50px] text-center transform scale-[1] origin-center `}
                key={index}
              >
                <div className="card_content">
                  <h6
                    className={`${colThreeCard.textColor} text-[20px]  font-bold `}
                  >
                    {colThreeCard.cardSubTitle}
                  </h6>
                  <h2
                    className={`${colThreeCard.textColor} text-[80px] font-bold mb-4 `}
                  >
                    <span>{colThreeCard.counterItemOne}</span>
                    <span>{colThreeCard.counterItemTwo}</span>
                    <span className={`text-[20px] font-normal `}>
                      {colThreeCard.counterItemThree}
                    </span>
                  </h2>
                  <ul className={`${colThreeCard.textListColor} list-none `}>
                    {colThreeCard.cardDetail?.map((item, index) => (
                      <li className={` text-[16px] mb-4 `} key={index}>
                        {item.paragraph}
                      </li>
                    ))}
                  </ul>
                  {colThreeCard.buttonText && (
                    <Link
                      href={colThreeCard.buttonUrl || "#"}
                      className={`${Style.button_default} ${
                        data?.btnHoverOut === true ? Style.button_default2 : ""
                      } mt-5`}
                      style={{ backgroundColor: colThreeCard.buttonBgColor }}
                    >
                      {colThreeCard.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

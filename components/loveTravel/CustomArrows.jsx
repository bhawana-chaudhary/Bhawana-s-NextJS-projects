import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Style from "../../styles/loveTravel.module.scss";
import Image from "next/image";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${Style.custom_arrow} ${Style.custom_prev_arrow} custom_arrow custom_prev_arrow max-w-[30px] h-[30px] `}
      style={{ ...style }}
      onClick={onClick}
    >
      {/* <FaArrowLeft /> */}
      <Image
        src="/loveTravel/icon_left.png"
        width={100}
        height={100}
        alt="img"
        className=" w-full h-full object-contain "
      />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${Style.custom_arrow} ${Style.custom_next_arrow} custom_arrow custom_next_arrow max-w-[30px] h-[30px] `}
      style={{ ...style }}
      onClick={onClick}
    >
      {/* <FaArrowRight /> */}
      <Image
        src="/loveTravel/icons_right.png"
        width={100}
        height={100}
        alt="img"
        className=" w-full h-full object-contain "
      />
    </div>
  );
};

export { PrevArrow, NextArrow };

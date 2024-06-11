import React, { useState, useEffect } from "react";
import Head from "next/head";
import Style from "../styles/homePage.module.scss";
import Header from "../components/homePage/Header";
import Banner from "../components/homePage/Banner";

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const [isHeaderButtonHovered, setHeaderButtonHovered] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
    inside: true,
  });
  const handleMouseMove = (e) => {
    const sliderRect = document.body.getBoundingClientRect();
    const cursorX = e.clientX - sliderRect.left;
    const cursorY = e.clientY - sliderRect.top;

    const isInsideSlider =
      cursorX >= 0 &&
      cursorX <= sliderRect.width &&
      cursorY >= 0 &&
      cursorY <= sliderRect.height;

    setCursorPosition({
      x: cursorX - 40,
      y: cursorY - 40,
      inside: isInsideSlider,
    });
  };
  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <FontStyles />
      <Header
        setIsHovered={setIsHovered}
        setHeaderButtonHovered={setHeaderButtonHovered}
      />
      <Banner
        className={Style.main_title}
        setIsTitleHovered={setIsTitleHovered}
      />
      <div
        className={`${Style.cursor} cursor absolute w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out z-20 
        `}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorPosition.inside && !isHovered ? 1 : 0.2,
          transform: cursorPosition.inside && !isHovered ? "" : "scale(1.5)",
          boxShadow:
            cursorPosition.inside && !isHovered
              ? "rgb(253, 249, 207) 0px 0px 0px 1px inset"
              : "rgba(253, 249, 207, 0.527) 0px 0px 0px 1px inset",
          backgroundColor:
            cursorPosition.inside && !isTitleHovered && !isHovered
              ? ""
              : "rgb(253, 249, 207)",

          width: cursorPosition.inside && !isTitleHovered ? "" : "120px",
          height: cursorPosition.inside && !isTitleHovered ? "" : "120px",
          // marginLeft: cursorPosition.inside && !isHeaderButton ? "" : "-50px",
          // marginTop: cursorPosition.inside && !isHeaderButton ? "" : "-50px",
          // width:
          //   cursorPosition.inside && !isCardHovered && !isIconCardHovered
          //     ? ""
          //     : isCardHovered || isIconCardHovered
          //     ? "152px"
          //     : "120px",
        }}
      >
        <span
          className={`${
            isTitleHovered ? "block" : "hidden"
          } text-[14px] text-black font-nunitoSans font-semibold transition duration-300 ease-in-out `}
        >
          Explore Project
        </span>
      </div>
    </>
  );
}

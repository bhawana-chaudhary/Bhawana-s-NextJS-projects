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
  const [isHeaderHamburgerHovered, setHeaderHamburgerHovered] = useState(false);
  const [isBannerButtonHovered, setBannerButtonHovered] = useState(false);
  // const [listHoverPosition, setListHoverPosition] = useState({
  //   left: 0,
  //   top: 0,
  // });

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

  // const handleListItemHover = (e) => {
  //   const listItemRect = e.target.getBoundingClientRect();
  //   setListHoverPosition({
  //     left: listItemRect.left + 13,
  //     top: listItemRect.top + 23,
  //   });
  //   setIsListHovered(true);
  // };
  // const handleListItemLeave = () => {
  //   setIsListHovered(false);
  // };

  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ----------

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  };

  const isMdScreen = useMediaQuery("(max-width: 991px)");

  return (
    <>
      <FontStyles />
      <Header
        setIsHovered={setIsHovered}
        setHeaderButtonHovered={setHeaderButtonHovered}
        setHeaderHamburgerHovered={setHeaderHamburgerHovered}
      />
      <Banner
        className={Style.main_title}
        setIsTitleHovered={setIsTitleHovered}
        setBannerButtonHovered={setBannerButtonHovered}
      />
      <div
        className={`${Style.cursor} cursor absolute w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out z-20 
        `}
        style={{
          // left: cursorPosition.x,
          // top: cursorPosition.y,
          left: isHeaderButtonHovered
            ? "13px"
            : isHeaderHamburgerHovered
            ? "auto "
            : isBannerButtonHovered
            ? isMdScreen
              ? "50px"
              : "auto"
            : cursorPosition.x,
          top: isHeaderButtonHovered
            ? "23px"
            : isHeaderHamburgerHovered
            ? "23px"
            : isBannerButtonHovered
            ? isMdScreen
              ? "auto"
              : "52%"
            : cursorPosition.y,

          right: isHeaderHamburgerHovered
            ? "23px"
            : isBannerButtonHovered
            ? isMdScreen
              ? "auto"
              : "165px"
            : cursorPosition.x,

          bottom: isBannerButtonHovered
            ? isMdScreen
              ? "269px"
              : ""
            : cursorPosition.y,
          opacity: cursorPosition.inside && !isHovered ? 1 : 0.2,
          // transform: cursorPosition.inside && !isHovered ? "" : "scale(1.5)",
          transform: isBannerButtonHovered
            ? isMdScreen
              ? "scale(1.95)"
              : "scale(2.8)"
            : isHeaderButtonHovered ||
              isHeaderHamburgerHovered ||
              isBannerButtonHovered
            ? "translate(0, 0)"
            : cursorPosition.inside && !isHovered
            ? ""
            : "scale(1.5)",

          // transform:
          //   isHeaderButtonHovered ||
          //   isHeaderHamburgerHovered ||
          //   isBannerButtonHovered
          //     ? "translate(0, 0)"
          //     : cursorPosition.inside && !isHovered
          //     ? ""
          //     : "scale(1.5)",
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
          // width: cursorPosition.inside
          //   ? isBannerButtonHovered
          //     ? "169px"
          //     : isTitleHovered
          //     ? "120px"
          //     : ""
          //   : "",
          // height: cursorPosition.inside
          //   ? isBannerButtonHovered
          //     ? "169px"
          //     : isTitleHovered
          //     ? "120px"
          //     : ""
          //   : "",

          transition:
            isHeaderButtonHovered || isHeaderHamburgerHovered
              ? "transition-all"
              : "",
          transitionDuration:
            isHeaderButtonHovered || isHeaderHamburgerHovered ? "1000" : "",
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

import React from "react";
import Head from "next/head";
import Header from "../components/loveTravel/Header";
import Banner from "../components/loveTravel/Banner";
import Intro from "../components/loveTravel/Intro";
import ColThreeSmallCard from "../components/loveTravel/ColThreeSmallCard";
import ColThreeCard from "../components/loveTravel/ColThreeCard";
import IntroWithSearch from "../components/loveTravel/IntroWithSearch";
import ColFourCard from "../components/loveTravel/ColFourCard";
import SliderWithParallax from "../components/loveTravel/SliderWithParallax";
import {
  intro,
  intro2,
  parallaxBlade,
  parallaxBlade2,
} from "../public/data/loveTravelData";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900", "600"],
  display: "swap",
});

const FontStyles = () => (
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default function loveTravel() {
  return (
    <>
      <div className={poppins.className}>
        <FontStyles />
        <Header />
        <Banner />
        <Intro data={intro} />
        <ColThreeSmallCard />
        <ColThreeCard />
        <IntroWithSearch />
        <Intro data={intro2} />
        <ColFourCard />
        <SliderWithParallax data={parallaxBlade} />
        <ColFourCard />
        {/* <SliderWithParallax data={parallaxBlade2} />
        <ColFourCard /> */}
      </div>
    </>
  );
}

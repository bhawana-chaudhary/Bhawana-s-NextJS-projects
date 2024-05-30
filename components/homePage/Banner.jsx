import React, { useState } from "react";
import Image from "next/image";
import Style from "../../styles/homePage.module.scss";

const asliBannerImgData = [
  {
    id: 1,
    imgUrl: "/homePage/cover_img1.webp",
    listText: "Endless Summer",
  },
  {
    id: 2,
    imgUrl: "/homePage/cover_img2.webp",
    listText: "Knight Riders",
  },
  {
    id: 3,
    imgUrl: "/homePage/cover_img3.webp",
    listText: "Handmade Shop",
  },
  {
    id: 4,
    imgUrl: "/homePage/cover_img4.webp",
    listText: "Working Remotely",
  },
  {
    id: 5,
    videoUrl: "/homePage/cover_img5.mp4",
    listText: "Island Adventure",
  },
];

export default function Banner() {
  const [selectedBanner, setSelectedBanner] = useState(asliBannerImgData[0]);

  const handleBannerClick = (banner) => {
    setSelectedBanner(banner);
  };
  return (
    <>
      <section className="banner relative w-full min-h-[100vh] py-24 flex items-end px-24 ">
        <div
          className={`${Style.banner_bgWrap}banner_bgWrap absolute top-0 right-0 w-full h-full `}
        >
          <div className="img_wrapper w-full h-full ">
            {selectedBanner.imgUrl && (
              <Image
                src={selectedBanner.imgUrl}
                width={2500}
                height={2000}
                alt="img"
                loading="lazy"
                className=" w-full h-full object-cover "
              />
            )}
            {selectedBanner.videoUrl && (
              <video
                src={selectedBanner.videoUrl}
                autoplay=""
                loop
                muted
                className=" w-full h-full object-cover "
              ></video>
            )}
          </div>
        </div>
        <div className="banner_content z-10 ">
          <div className="listWrapper">
            <ul>
              {asliBannerImgData.map((bannerBg, index) => (
                <li
                  key={index}
                  className={`text-white text-[18px] cursor-pointer ${
                    selectedBanner.id === bannerBg.id ? "font-bold" : ""
                  }`}
                  onClick={() => handleBannerClick(bannerBg)}
                >
                  <span>{bannerBg.listText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

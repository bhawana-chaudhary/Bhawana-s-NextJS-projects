import React from "react";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

const colThreeSmallCardData = [
  {
    id: 1,
    bgImgUrl: "/loveTravel/colThree_bgImg_1.jpeg",
    cardIcon: "/loveTravel/colThree_gifIcon_1.gif",
    cardText: "City Walks Tour",
  },
  {
    id: 2,
    bgImgUrl: "/loveTravel/colThree_bgImg_2.jpeg",
    cardIcon: "/loveTravel/colThree_gifIcon_2.gif",
    cardText: "Electric Bikes",
  },
  {
    id: 3,
    bgImgUrl: "/loveTravel/colThree_bgImg_3.jpeg",
    cardIcon: "/loveTravel/colThree_gifIcon_3.gif",
    cardText: "Skyscrapers View",
  },
];

export default function ColThreeSmallCard() {
  return (
    <>
      <section className=" colThree_smallCard relative w-full pt-[70px] pb-[100px] ">
        <div className={`${Style.container}`}>
          <div className="colThree_wrap relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap ">
            {colThreeSmallCardData.map((colThreeCard, index) => (
              <div
                className="colThree relative w-[calc(33.33%-30px)] mx-[15px] min-h-[120px] rounded-[15px] overflow-hidden mb-5 "
                key={index}
              >
                <div className="card_bg absolute top-0 left-0 w-full h-full ">
                  <Image
                    src={colThreeCard.bgImgUrl}
                    width={800}
                    height={500}
                    alt="bg"
                    className=" w-full h-full object-cover object-center "
                  />
                </div>
                <div className="card_content relative flex items-center p-5 z-[2] ">
                  <div className="card_icon relative w-full max-w-[80px] h-[80px] mr-10 ">
                    <Image
                      src={colThreeCard.cardIcon}
                      width={100}
                      height={100}
                      alt="icon"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                  <div className="card_text relative ">
                    <h4 className=" text-[20px] font-bold text-white ">
                      {colThreeCard.cardText}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

const colFourCardData = [
  {
    id: 1,
    cardBgImg: "/loveTravel/col_four_img1.jpeg",
    cardTitle: "Greece",
    cardParagraph: "Experience the ancient history & beaches",
    buttonText: "All Packages",
  },
  {
    id: 2,
    cardBgImg: "/loveTravel/col_four_img2.jpeg",
    cardTitle: "Egypt",
    cardParagraph: "Discover the land of pharaohs & pyramids",
    buttonText: "All Packages",
  },
  {
    id: 3,
    cardBgImg: "/loveTravel/col_four_img3.jpeg",
    cardTitle: "Africa",
    cardParagraph: "Embark on a journey for your lifetime",
    buttonText: "All Packages",
  },
  {
    id: 4,
    cardBgImg: "/loveTravel/col_four_img4.jpeg",
    cardTitle: "France",
    cardParagraph: "Indulge in the art, culture, and cuisine",
    buttonText: "All Packages",
  },
];

export default function ColFourCard() {
  return (
    <>
      <section className=" colFourCard relative w-full pt-[70px] pb-[100px] bg-white ">
        <div className={`${Style.container}`}>
          <div className="colFour_wrap relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap ">
            {colFourCardData.map((colFourCard, index) => (
              <div
                className="colFour group relative w-[calc(25%-30px)] mx-[15px] min-h-[400px] rounded-[15px] overflow-hidden bg-white mb-5 "
                key={index}
              >
                {colFourCard.cardBgImg && (
                  <div className="cardBgImg_wrap absolute top-0 left-0 w-full h-full  ">
                    <Image
                      src={colFourCard.cardBgImg}
                      width={400}
                      height={600}
                      alt="cardBg"
                      className=" w-full h-full object-cover object-center "
                    />
                  </div>
                )}
                <div className="cardContent relative w-full h-full p-[30px] bg-[#00000052] flex flex-wrap items-end z-[2] ">
                  <div className="cardText relative w-full ">
                    <div className="cardTopText relative w-full text-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-[1] ">
                      {colFourCard.cardTitle && (
                        <h4 className=" text-white text-[25px] font-bold mb-[10px] leading-[24px] ">
                          {colFourCard.cardTitle}
                        </h4>
                      )}
                      {colFourCard.cardParagraph && (
                        <p className=" text-white text-[14px] mb-[10px] leading-[24px] ">
                          {colFourCard.cardParagraph}
                        </p>
                      )}
                      {colFourCard.buttonText && (
                        <Link href="/" className={`${Style.button_default}`}>
                          {colFourCard.buttonText}
                        </Link>
                      )}
                    </div>
                    <div className="cardBottomText relative w-full text-center mt-[10px] opacity-[1] transition-opacity duration-700 ease-in-out group-hover:opacity-0 ">
                      {colFourCard.cardTitle && (
                        <h4 className=" text-white text-[20px] font-bold mb-[10px] leading-[24px] ">
                          {colFourCard.cardTitle}
                        </h4>
                      )}
                      {colFourCard.cardParagraph && (
                        <p className=" text-white text-[14px] leading-[24px] ">
                          {colFourCard.cardParagraph}
                        </p>
                      )}
                    </div>
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

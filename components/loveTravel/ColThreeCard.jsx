import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";
import FormOverlay from "./FormOverlay";
import MapOverlay from "./MapOverlay";

const colThreeCardData = [
  {
    id: 1,
    cardImgUrl: "/loveTravel/colThree_img1.jpeg",
    iconClock: "/loveTravel/icon-clock-1.png",
    iconText: "1 Week",
    iconMail: "/loveTravel/icon-mail-1.png",
    iconTrackOrder: "/loveTravel/icon-track-order-1.png",
    iconLocation: "/loveTravel/icon-location-1.png",
    cardTitle: "Chiang Mai",
    locationText: "Thailand",
    cardText:
      "Visit the temples and the Chiang Mai Night Bazaar, a huge huge market located on Chiang Klan Road.",
    buttonText: "Details",
    buttonBgColor: "#1BBC9B",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30221.966702474136!2d98.93658356013427!3d18.764886506685386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30da3a7e90bb6f5d%3A0x98d46270a59b4367!2sChiang%20Mai%2C%20Distretto%20di%20Mueang%20Chiang%20Mai%2C%20Provincia%20di%20Chiang%20Mai%2C%20Thailandia!3m2!1d18.788343899999997!2d98.98530079999999!4m5!1s0x30da37360a1597d9%3A0xd71cc5202ab6547b!2zV2F0IFBocmEgVGhhdCBEb2kgS2hhbSDguKfguLHguJTguJ7guKPguLDguJjguLLguJXguLjguJTguK3guKLguITguLM!3m2!1d18.7594943!2d98.91867289999999!5e0!3m2!1sit!2sit!4v1684919198514!5m2!1sit!2sit",
  },
  {
    id: 2,
    cardImgUrl: "/loveTravel/colThree_img2.jpeg",
    iconClock: "/loveTravel/icon-clock-2.png",
    iconText: "5 Days",
    iconMail: "/loveTravel/icon-mail-2.png",
    iconTrackOrder: "/loveTravel/icon-track-order-2.png",
    iconLocation: "/loveTravel/icon-location-2.png",
    cardTitle: "Chao Phraya",
    locationText: "Thailand",
    cardText:
      "Boat tour in the capital of Thailand, Bangkok, to see the beautiful palaces and monuments from the water.",
    buttonText: "Details",
    buttonBgColor: "#14B9D5",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15502.347448376451!2d100.49245537298367!3d13.743444529772681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30e2995d372de33f%3A0x8c17a8af81664094!2sGolden%20Mount%20Temple%20(Wat%20Saket)%2C%20Thanon%20Chakkraphatdi%20Phong%2C%20Ban%20Bat%2C%20Pom%20Prap%20Sattru%20Phai%2C%20Bangkok%2C%20Thailandia!3m2!1d13.7538637!2d100.50654589999999!4m5!1s0x30e2991e36b8eee5%3A0xa42bd992008c94cd!2sChao%20Phraya%2C%20Khlong%20San%2C%20Bangkok%2010600%2C%20Thailandia!3m2!1d13.736934199999999!2d100.50379389999999!5e0!3m2!1sit!2sit!4v1684921153421!5m2!1sit!2sit",
  },
  {
    id: 3,
    cardImgUrl: "/loveTravel/colThree_img3.jpeg",
    iconClock: "/loveTravel/icon-clock-3.png",
    iconText: "10 Days",
    iconMail: "/loveTravel/icon-mail-3.png",
    iconTrackOrder: "/loveTravel/icon-track-order-3.png",
    iconLocation: "/loveTravel/icon-location-3.png",
    cardTitle: "Bangkok",
    locationText: "Thailand",
    cardText:
      "Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.",
    buttonText: "Details",
    buttonBgColor: "#BA71DA",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d383268.66637852206!2d100.20602984043964!3d14.096391060108697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30e275daaebc8f83%3A0x47c36f90a7ff2b19!2sAyutthaya%2C%20Distretto%20di%20Phra%20Nakhon%20Si%20Ayutthaya%2C%20Provincia%20di%20Ayutthaya%2C%20Thailandia!3m2!1d14.369232499999999!2d100.5876634!4m5!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailandia!3m2!1d13.7563309!2d100.5017651!5e0!3m2!1sit!2sit!4v1684921090109!5m2!1sit!2sit",
  },
];

export default function ColThreeCard() {
  const [buttonBgColor, setOverlayBgColor] = useState("");

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlay = (bgColor) => {
    setOverlayBgColor(bgColor);
    setIsOverlayOpen((prev) => !prev);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  // --------

  const [isMapOverlayOpen, setIsMapOverlayOpen] = useState(false);
  const [mapSrc, setMapSrc] = useState("");
  const toggleMapOverlay = (bgColor, src) => {
    setOverlayBgColor(bgColor);
    setMapSrc(src);
    setIsMapOverlayOpen((prev) => !prev);
  };
  const closeMapOverlay = () => {
    setIsMapOverlayOpen(false);
  };

  return (
    <>
      <section className=" colThreeCard relative w-full bg-white pb-[100px] ">
        <div className={`${Style.container}`}>
          <div className="colThree_wrap relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap ">
            {colThreeCardData.map((colThreeCard, index) => (
              <div
                className="colThree relative w-[calc(33.33%-30px)] mx-[15px] rounded-[15px] overflow-hidden bg-white mb-5 "
                key={index}
                style={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="card_img relative w-full h-full max-h-[279px] ">
                  <Link href="/" className={`${Style.redirect_link}`}>
                    .
                  </Link>
                  <Image
                    src={colThreeCard.cardImgUrl}
                    width={800}
                    height={500}
                    alt="bg"
                    className=" w-full h-full object-cover object-center "
                    loading="lazy"
                  />
                </div>
                <div className="card_content relative p-[30px] pt-0 mt-[-20px] z-[6] ">
                  <div
                    className="card_topContent bg-white py-2 px-4 rounded-[5px] flex justify-between mb-[30px] "
                    style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className=" relative flex items-center ">
                      {colThreeCard.iconClock && (
                        <div className="icon max-w-[15px] h-[15px] mr-[15px] ">
                          <Image
                            src={colThreeCard.iconClock}
                            width={50}
                            height={50}
                            alt="icon"
                            className=" w-full h-full object-contain "
                            loading="lazy"
                          />
                        </div>
                      )}
                      {colThreeCard.iconText && (
                        <span className=" text-[14px] text-[#6e6e6e] ">
                          {colThreeCard.iconText}
                        </span>
                      )}
                    </div>
                    <div className=" relative flex items-center ">
                      {colThreeCard.iconMail && (
                        <div
                          className="icon max-w-[15px] h-[15px] ml-[15px] cursor-pointer "
                          onClick={() =>
                            toggleOverlay(colThreeCard.buttonBgColor)
                          }
                        >
                          <Image
                            src={colThreeCard.iconMail}
                            width={50}
                            height={50}
                            alt="icon"
                            className=" w-full h-full object-contain "
                            loading="lazy"
                          />
                        </div>
                      )}
                      {colThreeCard.iconTrackOrder && (
                        <div
                          className="icon max-w-[15px] h-[15px] ml-[15px] cursor-pointer "
                          onClick={() =>
                            toggleMapOverlay(
                              colThreeCard.buttonBgColor,
                              colThreeCard.mapSrc
                            )
                          }
                        >
                          <Image
                            src={colThreeCard.iconTrackOrder}
                            width={50}
                            height={50}
                            alt="icon"
                            className=" w-full h-full object-contain "
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {colThreeCard.cardTitle && (
                    <div className="card_title relative w-fit mb-5 ">
                      <Link href="/" className={`${Style.redirect_link}`}>
                        .
                      </Link>
                      <h4 className=" text-[20px] font-bold text-black mb-2 ">
                        {colThreeCard.cardTitle}
                      </h4>
                      <div className=" relative flex items-center ">
                        {colThreeCard.iconLocation && (
                          <div className="icon max-w-[15px] h-[15px] mr-[15px] ">
                            <Image
                              src={colThreeCard.iconLocation}
                              width={50}
                              height={50}
                              alt="icon"
                              className=" w-full h-full object-contain "
                              loading="lazy"
                            />
                          </div>
                        )}
                        <p className=" text-[16px] text-[#6e6e6e] font-medium ">
                          {colThreeCard.locationText}
                        </p>
                      </div>
                    </div>
                  )}
                  {colThreeCard.cardText && (
                    <div className=" cardText relative border-y-[#e4e4e4] border-y-[1px] border-solid py-5 ">
                      <p className=" text-[16px] text-[#6e6e6e] font-medium ">
                        {colThreeCard.cardText}
                      </p>
                    </div>
                  )}
                  <div className="button_wrap relative flex mt-5">
                    <Link
                      href="/"
                      className={`${Style.button_default}`}
                      style={{ backgroundColor: colThreeCard.buttonBgColor }}
                    >
                      {colThreeCard.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FormOverlay
          isOpen={isOverlayOpen}
          onClose={closeOverlay}
          bgColor={buttonBgColor}
        />
        <MapOverlay
          isOpen={isMapOverlayOpen}
          onClose={closeMapOverlay}
          bgColor={buttonBgColor}
          mapSrc={mapSrc}
        />
      </section>
    </>
  );
}

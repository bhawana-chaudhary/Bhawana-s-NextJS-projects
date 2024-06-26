import React from "react";

export default function MapOverlay({ isOpen, onClose, bgColor, mapSrc }) {
  return (
    <>
      <div
        className={` mapOverlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007a] flex items-center z-40 ${
          isOpen ? "flex" : " hidden "
        } `}
      >
        <div className=" relative w-full max-w-[900px] mx-auto p-10 bg-white rounded-[15px] overflow-hidden ">
          <div
            className={`close_icon absolute top-0 right-0 w-[30px] h-[30px] bg-[#1BBC9B] cursor-pointer `}
            style={{ backgroundColor: bgColor }}
            onClick={onClose}
          >
            <div className=" relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[16px] h-[2px] rounded-[5px] bg-white transform rotate-[45deg] "></div>
            <div className=" relative top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[16px] h-[2px] rounded-[5px] bg-white transform rotate-[-45deg] "></div>
          </div>
          <div className="map_wrapper w-full min-h-[450px] ">
            <iframe
              src={mapSrc}
              allowfullscreen=""
              className=" w-full h-full object-cover "
              style={{ minHeight: "inherit" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

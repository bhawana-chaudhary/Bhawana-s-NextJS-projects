import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

export default function FormOverlay({ isOpen, onClose, bgColor }) {
  return (
    <>
      <div
        className={` formOverlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007a] flex items-center z-40 ${
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
          <div className="form_wrap relative w-full bg-[url('/loveTravel/formOverlay_bg.png')] bg-no-repeat bg-cover bg-center ">
            <div className="form_intro relative w-full text-center ">
              <h3 className=" text-[25px] font-bold text-black mb-2 ">
                Pre Sales Request
              </h3>
              <p className=" text-[16px] text-[#6e6e6e] font-medium ">
                Fill free to contact us for any additional informations
              </p>
            </div>
            <form action="" className=" relative w-full mt-10 ">
              <div className="wrap relative w-full mb-4 ">
                <label htmlFor="formID" className=" text-[0] hidden ">
                  .
                </label>
                <input
                  type="text"
                  placeholder="Chiang Mai - ID : 5071"
                  id="formID"
                  className=" relative w-full outline-none pointer-events-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                />
              </div>
              <div className="wrapper relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap  mb-4 ">
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourName" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    id="yourName"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourSurname" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="text"
                    placeholder="Type your surname"
                    id="yourSurname"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
              </div>
              <div className="wrapper relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap  mb-4 ">
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourEmail" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="email"
                    placeholder="Insert your email"
                    id="yourEmail"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourPhone" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="number"
                    placeholder="Insert your phone"
                    id="yourPhone"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
              </div>
              <div className="wrapper relative w-[calc(100%+30px)] ml-[-15px] flex flex-wrap  mb-4 ">
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourDate" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="date"
                    id="yourDate"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
                <div className="wrap w-[calc(50%-30px)] mx-[15px] ">
                  <label htmlFor="yourGuests" className=" text-[0] hidden ">
                    .
                  </label>
                  <input
                    type="number"
                    placeholder="Insert number guests"
                    id="yourGuests"
                    className=" relative w-full outline-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                  />
                </div>
              </div>
              <div className="wrap relative w-full mb-4 ">
                <label htmlFor="yourMessage" className=" text-[0] hidden ">
                  .
                </label>
                <textarea
                  name="yourMessage"
                  id="yourMessage"
                  placeholder="Your Message"
                  className=" relative w-full min-h-[158px] outline-none pointer-events-none text-[14px] text-[#6e6e6e] placeholder:text-[#6e6e6e] font-medium py-[15px] px-[30px] border-[#F1F1F1] border-[1px] border-solid rounded-[5px] "
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${Style.button_default} `}
                style={{ backgroundColor: bgColor }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

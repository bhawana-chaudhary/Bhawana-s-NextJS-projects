import React, { forwardRef } from "react";
import Image from "next/image";
import Style from "../../styles/loveTravel.module.scss";

const SearchBar = forwardRef(
  (
    {
      SearchBarClass,
      buttonClass,
      iconSearch,
      iconLocation,
      iconWorld,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <section ref={ref} className={`searchBar relative w-full z-10 `}>
          {/* <div className={`${Style.container}`}> */}
          <div
            className={`bottom_searchWrap relative w-full bg-white py-5 px-6 rounded-[15px] ${SearchBarClass} `}
            style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <form action="" className=" relative flex justify-between ">
              <div className="wrap relative w-full max-w-[230px] px-6 flex items-center mr-8 ">
                <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                  <Image src={iconSearch} width={40} height={40} alt="icon" />
                </div>
                <div className="inputWrap w-[calc(100%-40px)] ">
                  <label
                    htmlFor="search"
                    className=" text-[16px] font-bold text-black "
                  >
                    Search
                  </label>
                  <input
                    type="search"
                    placeholder="Insert keyword"
                    id="search"
                    className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                  />
                </div>
              </div>
              <div className="wrap relative w-full max-w-[230px] px-6 flex items-center border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
                <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                  <Image src={iconLocation} width={40} height={40} alt="icon" />
                </div>
                <div className="inputWrap w-[calc(100%-40px)] ">
                  <label
                    htmlFor="destinations"
                    className=" text-[16px] font-bold text-black "
                  >
                    Destinations
                  </label>
                  <select
                    name="destinations"
                    id="destinations"
                    className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                  >
                    <option value="0">All Destinations</option>
                    <option value="1">Africa</option>
                    <option value="2"> - Egypt</option>
                    <option value="3">Europe</option>
                    <option value="4"> - Greece</option>
                    <option value="5"> - France</option>
                    <option value="6"> - Italy</option>
                    <option value="7">Asia</option>
                    <option value="8"> - Thailand</option>
                    <option value="9"> - Japan</option>
                    <option value="10">U.S.A</option>
                    <option value="11"> - California</option>
                  </select>
                </div>
              </div>
              <div className="wrap relative w-full max-w-[230px] px-6 flex items-center  border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
                <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                  <Image src={iconWorld} width={40} height={40} alt="icon" />
                </div>
                <div className="inputWrap w-[calc(100%-40px)] ">
                  <label
                    htmlFor="typologies"
                    className=" text-[16px] font-bold text-black "
                  >
                    Typologies
                  </label>
                  <select
                    name="typologies"
                    id="typologies"
                    className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                  >
                    <option value="0">All Typologies</option>
                    <option value="1">Sports Activities</option>
                    <option value="2">Family-Friendly</option>
                    <option value="3">Heritage Tours</option>
                    <option value="4">Road Trips</option>
                    <option value="5">Budget Travel</option>
                    <option value="6">Culinary Tourism</option>
                    <option value="7">Eco-tourism</option>
                    <option value="8">Adventure Travel</option>
                    <option value="9">Beach Holidays</option>
                    <option value="10">Cultural Tours</option>
                  </select>
                </div>
              </div>
              <div className="wrap relative w-full max-w-[266px] ">
                <button
                  type="Submit"
                  value="SEARCH"
                  className={`${Style.button_default} w-full !p-6 !rounded-[10px] ${buttonClass} `}
                >
                  SEARCH
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}
          {/* <div
          ref={bottomSearchWrapRef}
          className="bottom_searchWrap relative min-w-[1228px] bg-white py-5 px-6 mt-[60px] rounded-[15px] z-10 "
          style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <form action="" className=" relative flex justify-between ">
            <div className="wrap relative w-full max-w-[230px] px-6 flex items-center mr-8 ">
              <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                <Image
                  src="/loveTravel/icon-search.svg"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <div className="inputWrap w-[calc(100%-40px)] ">
                <label
                  htmlFor="search"
                  className=" text-[16px] font-bold text-black "
                >
                  Search
                </label>
                <input
                  type="search"
                  placeholder="Insert keyword"
                  id="search"
                  className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                />
              </div>
            </div>
            <div className="wrap relative w-full max-w-[230px] px-6 flex items-center border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
              <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                <Image
                  src="/loveTravel/icon-location.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <div className="inputWrap w-[calc(100%-40px)] ">
                <label
                  htmlFor="destinations"
                  className=" text-[16px] font-bold text-black "
                >
                  Destinations
                </label>
                <select
                  name="destinations"
                  id="destinations"
                  className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                >
                  <option value="0">All Destinations</option>
                  <option value="1">Africa</option>
                  <option value="2"> - Egypt</option>
                  <option value="3">Europe</option>
                  <option value="4"> - Greece</option>
                  <option value="5"> - France</option>
                  <option value="6"> - Italy</option>
                  <option value="7">Asia</option>
                  <option value="8"> - Thailand</option>
                  <option value="9"> - Japan</option>
                  <option value="10">U.S.A</option>
                  <option value="11"> - California</option>
                </select>
              </div>
            </div>
            <div className="wrap relative w-full max-w-[230px] px-6 flex items-center  border-l-[#F1F1F1] border-l-[1px] border-solid mr-8 ">
              <div className="icon w-full max-w-[32px] h-[32px] mr-5 ">
                <Image
                  src="/loveTravel/icon-world.png"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </div>
              <div className="inputWrap w-[calc(100%-40px)] ">
                <label
                  htmlFor="typologies"
                  className=" text-[16px] font-bold text-black "
                >
                  Typologies
                </label>
                <select
                  name="typologies"
                  id="typologies"
                  className=" inline-block w-full text-[14px] text-[#6E6E6E] py-[5px] border-none outline-none placeholder:text-[#6E6E6E] "
                >
                  <option value="0">All Typologies</option>
                  <option value="1">Sports Activities</option>
                  <option value="2">Family-Friendly</option>
                  <option value="3">Heritage Tours</option>
                  <option value="4">Road Trips</option>
                  <option value="5">Budget Travel</option>
                  <option value="6">Culinary Tourism</option>
                  <option value="7">Eco-tourism</option>
                  <option value="8">Adventure Travel</option>
                  <option value="9">Beach Holidays</option>
                  <option value="10">Cultural Tours</option>
                </select>
              </div>
            </div>
            <div className="wrap relative w-full max-w-[266px] ">
              <button
                type="Submit"
                value="SEARCH"
                className={`${Style.button_default} w-full !p-6 !rounded-[10px] `}
              >
                SEARCH
              </button>
            </div>
          </form>
        </div> */}
        </section>
      </>
    );
  }
);
export default SearchBar;

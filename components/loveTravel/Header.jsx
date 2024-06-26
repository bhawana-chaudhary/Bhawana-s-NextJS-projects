import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/loveTravel.module.scss";

const headerListItem = [
  {
    id: 1,
    listItem: "Home",
    listItemUrl: "/",
    activeItem: true,
    subMenuListData: [
      {
        id: 1,
        subMenuItem: "Home 1",
        activeSubMenu: true,
      },
      {
        id: 2,
        subMenuItem: "Home 2",
      },
    ],
  },
  {
    id: 2,
    listItem: "Travel",
    listItemUrl: "/",
    subMenuListData: [
      {
        id: 1,
        subMenuItem: "Search Page",
      },
      {
        id: 2,
        subMenuItem: "Packages",
        innerSubMenuData: [
          {
            id: 1,
            innerMenuItem: "Single Package",
          },
          {
            id: 2,
            innerMenuItem: "Archive",
          },
          {
            id: 3,
            innerMenuItem: "Preview Layout",
          },
        ],
      },
      {
        id: 3,
        subMenuItem: "Destinations",
        innerSubMenuData: [
          {
            id: 1,
            innerMenuItem: "Single Destination",
          },
          {
            id: 2,
            innerMenuItem: "Archive",
          },
          {
            id: 3,
            innerMenuItem: "Preview Layout",
          },
        ],
      },
      {
        id: 4,
        subMenuItem: "Typologies",
        innerSubMenuData: [
          {
            id: 1,
            innerMenuItem: "Single Typology",
          },
          {
            id: 2,
            innerMenuItem: "Archive",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    listItem: "Pages",
    listItemUrl: "/",
    subMenuListData: [
      {
        id: 1,
        subMenuItem: "About Us",
      },
      {
        id: 2,
        subMenuItem: "Prices",
      },
      {
        id: 3,
        subMenuItem: "Services",
      },
      {
        id: 4,
        subMenuItem: "Contact Us",
      },
    ],
  },
  {
    id: 4,
    listItem: "Shop",
    listItemUrl: "/",
    subMenuListData: [
      {
        id: 1,
        subMenuItem: "Shop",
      },
      {
        id: 2,
        subMenuItem: "Single Product",
      },
    ],
  },
  {
    id: 5,
    listItem: "Blog",
    listItemUrl: "/",
    subMenuListData: [
      {
        id: 1,
        subMenuItem: "Archive",
      },
      {
        id: 2,
        subMenuItem: "Single Post",
      },
    ],
  },
  {
    id: 6,
    listItem: "Contact Us",
    listItemUrl: "/",
  },
];

const headerImgData = [
  {
    id: 1,
    imgUrl: "/loveTravel/header_img1.jpeg",
  },
  {
    id: 2,
    imgUrl: "/loveTravel/header_img2.jpeg",
  },
  {
    id: 3,
    imgUrl: "/loveTravel/header_img3.jpeg",
  },
  {
    id: 4,
    imgUrl: "/loveTravel/header_img4.jpeg",
  },
  {
    id: 5,
    imgUrl: "/loveTravel/header_img5.jpeg",
  },
  {
    id: 6,
    imgUrl: "/loveTravel/header_img6.jpeg",
  },
];

const socialIconData = [
  {
    id: 1,
    socialItem: "/loveTravel/icon-facebook.svg",
  },
  {
    id: 2,
    socialItem: "/loveTravel/icon-twitter.svg",
  },
  {
    id: 3,
    socialItem: "/loveTravel/icon-linkedin.png",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className=" loveTravelHeader absolute top-0 left-0 w-full py-5 z-30 ">
        <div className={`${Style.container}`}>
          <div className="header_wrap relative w-full flex flex-wrap justify-between items-center ">
            <div className="logo relative w-full max-w-[150px] h-[37px] ">
              <Link href="/" className={`${Style.redirect_link}`}>
                .
              </Link>
              <Image
                src="/loveTravel/loveTravel_logo.png"
                width={200}
                height={40}
                priority
                objectFit="contain"
                alt="logo"
                className=" w-full h-full object-contain "
              />
            </div>
            <div className="headerMenu relative ">
              <ul className=" relative list-disc flex ">
                {headerListItem.map((headerList, index) => (
                  <li
                    className={` relative group pl-3 ml-12 marker:text-[#1bbc9b] ${
                      headerList.activeItem === true ? " list-none ml-0 " : ""
                    } `}
                    key={index}
                  >
                    <Link
                      href={headerList.listItemUrl}
                      className={`relative text-[16px] leading-[1] font-normal transition-colors duration-300 ease-in-out group-hover:text-[#1bbc9b]  ${
                        headerList.activeItem === true
                          ? " text-[#1bbc9b] "
                          : " text-black"
                      }  `}
                    >
                      {headerList.listItem}
                    </Link>
                    {headerList.subMenuListData &&
                      headerList.subMenuListData.length > 0 && (
                        <div
                          className={` ${Style.headerSubMenuWrap} subMenuWrap absolute top-[calc(100%+20px)] left-[-10px] pt-5 transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-[1] group-hover:visible group-hover:top-[100%] `}
                        >
                          <ul className=" list-none min-w-[160px] ">
                            {headerList?.subMenuListData.map(
                              (subMenu, index) => (
                                <li
                                  className={`relative w-full  bg-[#494c4f] hover:bg-[#1bbc9b]  ${
                                    subMenu.activeSubMenu === true
                                      ? " !bg-[#1bbc9b] "
                                      : ""
                                  }`}
                                  key={index}
                                >
                                  <Link
                                    href="/"
                                    className=" py-[15px] pl-6 pr-4 inline-block text-white text-[13px] "
                                  >
                                    {subMenu.subMenuItem}
                                  </Link>
                                  {subMenu.innerSubMenuData &&
                                    subMenu.innerSubMenuData.length > 0 && (
                                      <div
                                        className={` ${Style.innerSubMenu_wrap} innerSubMenu_wrap absolute top-0 transition-all duration-300 ease-in-out `}
                                      >
                                        <ul className=" list-none min-w-[160px] ">
                                          {subMenu?.innerSubMenuData.map(
                                            (innerSubMenu, index) => (
                                              <li
                                                key={index}
                                                className={`relative w-full  bg-[#494c4f] hover:bg-[#1bbc9b] `}
                                              >
                                                <Link
                                                  href="/"
                                                  className=" py-[15px] pl-6 pr-4 inline-block text-white text-[13px] "
                                                >
                                                  {innerSubMenu.innerMenuItem}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hamburgerWithButton relative flex items-center ml-5 ">
              <div
                className={`hamburger w-[20px] transform scale-[1] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.1]  ${
                  isMenuOpen ? "scale-[1.1]" : ""
                }`}
                onClick={toggleMenu}
              >
                <div className=" w-5 h-[3px] rounded-[5px] bg-[#434a54] mb-[3px] "></div>
                <div className=" w-5 h-[3px] rounded-[5px] bg-[#434a54] mb-[3px] "></div>
                <div className=" w-5 h-[3px] rounded-[5px] bg-[#434a54] "></div>
              </div>
              <Link href="/" className={`${Style.button_default} ml-5`}>
                Search
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`header_sideWrap fixed top-0 w-full max-w-[450px] p-[70px] bg-white h-[100vh] overflow-y-scroll scroll-smooth transition-all duration-500 ease-in-out z-40 ${
            isMenuOpen ? " left-0 " : " left-[-450px] "
          } `}
          style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.1)" }}
        >
          <div
            className="close_icon absolute top-7 right-5 py-[5px] border-b-[2px] border-solid border-b-[#6e6e6e] cursor-pointer "
            onClick={closeMenu}
          >
            <div className=" relative w-[16px] h-[2px] rounded-[5px] bg-[#6E6E6E] transform rotate-[45deg] "></div>
            <div className=" relative top-[-2px] w-[16px] h-[2px] rounded-[5px] bg-[#6E6E6E] transform rotate-[-45deg] "></div>
          </div>
          <div className="logoWithText relative w-full max-w-[200px] text-center mx-auto ">
            <div className="logo relative w-full max-w-[190px] h-[46px] mx-auto mb-5 ">
              <Link href="/" className={`${Style.redirect_link}`}>
                .
              </Link>
              <Image
                src="/loveTravel/loveTravel_logo.png"
                width={200}
                height={50}
                priority
                objectFit="contain"
                alt="logo"
                className=" w-full h-full object-contain "
              />
            </div>
            <p className=" text-[16px] text-[#6E6E6E] ">
              Discover the World, one Full Adventure at a Time!
            </p>
          </div>
          <div className="headerImgWrap w-[calc(100%+16px)] ml-[-8px] mt-10 flex flex-wrap ">
            {headerImgData.map((imgData, index) => (
              <div
                className="col_three w-[calc(33.33%-16px)] mx-2 mb-4 "
                key={index}
              >
                <div className="imgWrap relative w-full rounded-[10px] overflow-hidden min-h-[93px] ">
                  <Image
                    src={imgData.imgUrl}
                    width={200}
                    height={200}
                    alt="img"
                    className=" w-full h-full object-cover "
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="address_wrap relative w-full mt-10 ">
            <h5 className=" text-[20px] text-black font-bold leading-[1.2] mb-10 ">
              Our Contacts
            </h5>
            <div className="wrap relative mb-10 ">
              <h6 className=" text-[16px] text-black font-bold leading-[1.2] tracking-[1px] mb-4 ">
                Address
              </h6>
              <p className=" text-[16px] text-[#6e6e6e] font-normal leading-[1.5] ">
                1080 Brickell Ave - Miami
                <br /> United States of America
              </p>
            </div>
            <div className="wrap relative mb-10 ">
              <h6 className=" text-[16px] text-black font-bold leading-[1.2] tracking-[1px] mb-4 ">
                Email
              </h6>
              <p className=" text-[16px] text-[#6e6e6e] font-normal leading-[1.5] ">
                info@travel.com
              </p>
            </div>
            <div className="wrap relative mb-10 ">
              <h6 className=" text-[16px] text-black font-bold leading-[1.2] tracking-[1px] mb-4 ">
                Phone
              </h6>
              <p className=" text-[16px] text-[#6e6e6e] font-normal leading-[1.5] ">
                Travel Agency +1 473 483 384
                <br /> Info Insurance +1 395 393 595
              </p>
            </div>
            <h5 className=" text-[20px] text-black font-bold leading-[1.2] ">
              Follow us
            </h5>
            <div className="socialIcon_wrap relative flex flex-wrap mt-[30px] ">
              {socialIconData.map((socialIcon, index) => (
                <div
                  className="social_icon relative w-[45px] h-[45px] rounded-[8px] bg-[#1bbc9b] flex justify-center items-center  mr-3 transition-colors duration-300 ease-in-out hover:bg-[#434a54] "
                  key={index}
                >
                  <Link href="/" className={`${Style.redirect_link}`}>
                    .
                  </Link>
                  <div className="icon max-w-[17px] h-[17px] ">
                    <Image
                      src={socialIcon.socialItem}
                      width={50}
                      height={50}
                      alt="icon"
                      className=" w-full h-full object-contain "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

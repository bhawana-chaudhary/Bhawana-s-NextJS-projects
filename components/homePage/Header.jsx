import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Style from "../../styles/homePage.module.scss";

const subMenuData = [
  {
    id: 1,
    subMenuHref: "/",
    subMenuItem: "Homepage",
    circleCounting: "01",
    active: true,
  },
  {
    id: 2,
    subMenuHref: "/",
    subMenuItem: "Lorem, ipsum2",
    circleCounting: "02",
  },
  {
    id: 3,
    subMenuHref: "/",
    subMenuItem: "ipsum dolor3",
    circleCounting: "03",
  },
  {
    id: 4,
    subMenuHref: "/",
    subMenuItem: "Lorem, ipsum4",
    circleCounting: "04",
  },
  {
    id: 5,
    subMenuHref: "/",
    subMenuItem: "Lorem, ipsum5",
    circleCounting: "05",
  },
  {
    id: 6,
    subMenuHref: "/",
    subMenuItem: "Lorem ipsum6",
    circleCounting: "06",
  },
  {
    id: 7,
    subMenuHref: "/",
    subMenuItem: "Lorem, ipsum7",
    circleCounting: "07",
  },
  {
    id: 8,
    subMenuHref: "/",
    subMenuItem: "Lorem ipsum8",
    circleCounting: "08",
  },
];

export default function Header({
  setIsHovered,
  setHeaderButtonHovered,
  setHeaderHamburgerHovered,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // ------menu---
  const menuRef = useRef(null);
  useEffect(() => {
    const menu = menuRef.current;

    const handleMouseEnter = () => {
      menu.classList.remove(Style.leaving);
      menu.classList.add(Style.hovered);
    };

    const handleMouseLeave = () => {
      menu.classList.remove(Style.hovered);
      menu.classList.add(Style.leaving);
    };

    if (menu) {
      menu.addEventListener("mouseenter", handleMouseEnter);
      menu.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (menu) {
        menu.removeEventListener("mouseenter", handleMouseEnter);
        menu.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  // ------menu---

  const [isHeaderButton, setIsHeaderButton] = useState(false);
  //  ----------

  // -------Header-List-Loop--
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const subMenuList = scrollContainer.firstChild;

    if (!subMenuList || !scrollContainer) return;

    let clonedTop = subMenuList.cloneNode(true);
    let clonedBottom = subMenuList.cloneNode(true);

    scrollContainer.appendChild(clonedTop);
    scrollContainer.insertBefore(clonedBottom, scrollContainer.firstChild);

    scrollContainer.scrollTop = subMenuList.scrollHeight;

    const handleScroll = () => {
      if (scrollContainer.scrollTop === 0) {
        scrollContainer.scrollTop = subMenuList.scrollHeight;
      } else if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight
      ) {
        scrollContainer.scrollTop = 0;
      }
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // -------Header-List-Loop--

  const handleMouseEnter = () => setHeaderButtonHovered(true);
  const handleMouseLeave = () => setHeaderButtonHovered(false);

  const handleMouseEnter2 = () => setHeaderHamburgerHovered(true);
  const handleMouseLeave2 = () => setHeaderHamburgerHovered(false);

  return (
    <>
      <header className="homePageHeader absolute top-0 left-0 bg-transparent w-full z-20">
        <div className="headerWrap relative flex justify-between  border-b-[1px] border-b-[#ffffff33] border-solid ">
          <div
            className={`${Style.asliHeader_button} asliHeader_button relative group flex items-center p-[34px] border-r-[1px] border-r-[#ffffff33] border-solid `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/" className={`${Style.redirect_link}`}>
              .
            </Link>
            <div className="button-circles w-5 h-5 inline-flex flex-wrap justify-between mr-2 group-hover:cursor-pointer ">
              <span className=" w-2 h-2 rounded-[50%] border-[2px] border-white border-solid inline-block transition-colors duration-300 ease-in-out group-hover:border-[#fdf9cf] "></span>
              <span className=" w-2 h-2 rounded-[50%] border-[2px] border-white border-solid inline-block transition-colors duration-300 ease-in-out group-hover:border-[#fdf9cf] "></span>
              <span className=" w-2 h-2 rounded-[50%] border-[2px] border-white border-solid inline-block transition-colors duration-300 ease-in-out group-hover:border-[#fdf9cf] "></span>
              <span className=" w-2 h-2 rounded-[50%] border-[2px] border-white border-solid inline-block transition-colors duration-300 ease-in-out group-hover:border-[#fdf9cf] "></span>
            </div>
            <h5 className=" relative left-0 text-white font-nunitoSans font-semibold tracking-[0.8px] transition-all duration-300 ease-in-out group-hover:text-[#fdf9cf] group-hover:left-4 ">
              Works
            </h5>
            {isHeaderButton && (
              <div
                className="cursor absolute  w-[62px] h-[62px] bg-transparent pointer-events-none rounded-[50%] flex justify-center items-center transition duration-300 ease-in-out z-20"
                style={{
                  left: "20px",
                  top: "20px",
                  opacity: 1,
                  // transform: "scale(1)",
                  boxShadow: "rgb(253, 249, 207) 0px 0px 0px 1px inset",
                }}
              />
            )}
          </div>
          <div className="logoWrapper relative  p-[34px]">
            <Link
              href="/"
              className={`swift-up-text text-[30px] text-white font-nanumMyeongjo font-medium transition-opacity duration-300 ease-in-out hover:opacity-[0.8] `}
            >
              Asli
            </Link>
          </div>
          <div
            ref={menuRef}
            className={` ${
              Style.hamburgerMenu
            } hamburgerMenu  group relative w-full max-w-[180px] flex items-center justify-end p-[34px] border-l-[1px] border-l-[#ffffff33] border-solid cursor-pointer z-[99] ${
              isMenuOpen ? "!border-l-0" : ""
            }`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onClick={toggleMenu}
          >
            <div
              className={`absolute left-[34px] top-[38%]  ${
                isMenuOpen ? "hidden" : "block"
              }`}
            >
              <h5 className=" absolute top-0 text-white font-nunitoSans font-semibold tracking-[0.8px] opacity-[1] transition-all duration-300 ease-in-out  group-hover:top-[-20px] group-hover:opacity-0 ">
                Menu
              </h5>
              <h5 className=" absolute top-[20px] text-[#fdf9cf] font-nunitoSans font-semibold tracking-[0.8px] opacity-0 transition-all duration-300 ease-in-out  group-hover:top-0 group-hover:opacity-[1] ">
                Open
              </h5>
            </div>
            <div
              className={`absolute left-[34px] top-[38%]  ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <h5 className=" absolute top-0 text-white font-nunitoSans font-semibold tracking-[0.8px] opacity-[1] transition-all duration-300 ease-in-out  group-hover:top-[-20px] group-hover:opacity-0 ">
                Close
              </h5>
              <h5 className=" absolute top-[20px] text-[#fdf9cf] font-nunitoSans font-semibold tracking-[0.8px] opacity-0 transition-all duration-300 ease-in-out  group-hover:top-0 group-hover:opacity-[1] ">
                Close
              </h5>
            </div>
            <div
              className={` ${Style.hameburger_icon} hameburger_icon ${
                isMenuOpen ? Style.hameburgerOpen : ""
              } `}
            >
              <div
                className={` ${Style.hameburger_item} w-10 h-[2px] mb-1 `}
              ></div>
              <div
                className={` ${Style.hameburger_item} ${Style.hameburger_item2} w-10 h-[2px] `}
              ></div>
            </div>
          </div>
          <div
            className={`header_submenu_overlay absolute top-0 left-0 w-full bg-black flex flex-wrap items-end overflow-hidden transition-all duration-500 ease-in-out z-50 ${
              isMenuOpen
                ? "top-0 rounded-e-none "
                : " top-[-100vh] rounded-e-[100%] pointer-events-none"
            }`}
          >
            <div className="sub_menu_container relative h-[100vh] w-[68%] overflow-hidden pr-14 border-r-[1px] border-r-[#ffffff33] border-solid  lg:w-full lg:border-0 tablet:h-[calc(100vh-340px)] phablet:h-[calc(100vh-251px)] sm:h-[calc(100vh-367px)] desktop:pr-6 tablet:pr-9 md:pr-5 lg:pt-20 ">
              <div
                ref={scrollContainerRef}
                className="scroll-container relative h-full w-full overflow-y-scroll"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <ul
                  id="subMenuList"
                  className={`${Style.sub_menu} sub_menu relative list-none `}
                >
                  {subMenuData.map((subMenu, index) => (
                    <li
                      key={index}
                      className={`relative w-fit ml-auto group overflow-hidden mb-5
                      `}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div
                        className={`relative w-full flex items-center justify-end transition-all duration-500 ease-in-out  
                        ${isMenuOpen ? Style.headerListAnimat : " "}
                        `}
                      >
                        <Link
                          href={subMenu.subMenuHref}
                          className={`${Style.redirect_link}`}
                        >
                          .
                        </Link>
                        <h2
                          className={`text-white font-nanumMyeongjo text-[133px] leading-[1.2] tracking-[-4px] font-normal transition-colors duration-300 ease-in-out text-right group-hover:text-[#fdf9cf] desktopLarge:text-[100px] desktop:text-[80px] tablet:text-[60px] phablet:text-[45px] md:tracking-normal sm:text-[30px] ${
                            subMenu.active === true ? "!text-[#fdf9cf]" : ""
                          }`}
                        >
                          {subMenu.subMenuItem}
                        </h2>
                        <div
                          className={`circle_count relative w-[70px] h-[70px] flex justify-center items-center border-[1px] border-[#ffffff33] border-solid rounded-[50%] transition-all duration-300 ease-in-out group-hover:border-[#fdf9cf] ml-14 tablet:w-[60px] tablet:h-[60px] md:w-[50px] md:h-[50px] md:ml-5  ${
                            subMenu.active === true ? "!border-[#fdf9cf]" : ""
                          }`}
                        >
                          <p
                            className={` text-[16px] font-nunitoSans text-white transition-colors duration-300 ease-in-out group-hover:text-[#fdf9cf] md:text-[14px]  ${
                              subMenu.active === true ? "!text-[#fdf9cf]" : ""
                            }`}
                          >
                            {subMenu.circleCounting}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="contactWrap_withCta relative w-[32%] p-14 pb-24 lg:w-full lg:flex lg:flex-wrap lg:justify-between tablet:h-full tablet:max-h-[340px] desktop:p-6 md:p-5 phablet:max-h-[251px] md:overflow-y-scroll md:scroll-smooth sm:!block sm:max-h-[367px] ">
              <div className="wrapper w-full max-w-[216px] mb-6">
                <p className=" text-[#cccccc] text-[14px] font-nunitoSans font-bold uppercase tracking-[0.8px] mb-[5px] ">
                  E-MAIL
                </p>
                <h6 className=" text-white text-[18px] font-nunitoSans font-bold tracking-[0.8px] mb-[5px] md:text-[16px] ">
                  asli@example.com
                </h6>
              </div>
              <div className="wrapper w-full max-w-[216px] mb-6">
                <p className=" text-[#cccccc] text-[14px] font-nunitoSans font-bold uppercase tracking-[0.8px] mb-[5px] ">
                  PHONES
                </p>
                <h6 className=" text-white text-[18px] font-nunitoSans font-bold tracking-[0.8px] mb-[5px] md:text-[16px] ">
                  +1 803-328-5035
                </h6>
                <h6 className=" text-white text-[18px] font-nunitoSans font-bold tracking-[0.8px] mb-[5px] md:text-[16px] ">
                  +1 281-664-7875
                </h6>
              </div>
              <div className="wrapper w-full max-w-[216px] mb-6">
                <p className=" text-[#cccccc] text-[14px] font-nunitoSans font-bold uppercase tracking-[0.8px] mb-[5px] ">
                  ADDRESS
                </p>
                <h6 className=" text-white text-[18px] font-nunitoSans font-bold tracking-[0.8px] mb-[5px] md:text-[16px] ">
                  1157 Wexford Way Rock Hill, SC 29730 USA
                </h6>
              </div>
              <div
                className={`${Style.asli_header_button} bg-transparent border-[2px] border-solid border-[#fdf9cf] `}
              >
                <Link href="/" className={`${Style.redirect_link}`}>
                  .
                </Link>
                <div className={`${Style.text}`}>
                  <span className={`${Style.top_text} text-[#fdf9cf] `}>
                    Download Asli Theme
                  </span>
                  <span className={`${Style.bottom_text} text-[#fdf9cf] `}>
                    Download Asli Theme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

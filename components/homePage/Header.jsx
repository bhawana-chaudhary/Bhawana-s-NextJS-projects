import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="homePageHeader absolute top-0 left-0 bg-transparent w-full z-20">
        <div className="headerWrap relative flex ">
          <div className="asliHeader_button">
            <h5>Works</h5>
          </div>
          <div className="logoWrapper">
            <Link href="/">Asli</Link>
          </div>
          <div className="HameburgerMenu">
            <h5>Menu</h5>
          </div>
        </div>
      </header>
    </>
  );
}

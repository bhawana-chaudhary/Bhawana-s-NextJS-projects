import React from "react";
// import Header from "./header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  );
}

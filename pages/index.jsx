import Head from "next/head";
import styles from "../styles/homePage.module.scss";
import Header from "../components/homePage/Header";
import Banner from "../components/homePage/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";

function Home() {
  return (
    <>
      <Header />
      <Promo />
      <MoreAboutUs />
    </>
  );
}

export default Home;

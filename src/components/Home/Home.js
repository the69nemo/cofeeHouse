import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";
import Serving from "../Serving/Serving";

function Home() {
  return (
    <>
      <Header />
      <Promo />
      <MoreAboutUs />
      <Serving />
    </>
  );
}

export default Home;

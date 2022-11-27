import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import MoreAboutUs from "../MoreAboutUs/MoreAboutUs";
import Serving from "../Serving/Serving";
import OurMenu from "../OurMenu/OurMenu";
import Quote from "../Quote/Quote";
import Read from "../Read/Read";

function Home({handleOpenModal}) {
  return (
    <>
      <Header />
      <Promo />
      <MoreAboutUs />
      <Serving />
      <OurMenu />
      <Quote
        handleOpenModal={handleOpenModal}
      />
      <Read />
    </>
  );
}

export default Home;

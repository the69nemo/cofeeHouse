import React from "react";
import "./Menu.css";
import Header from "../Header/Header";
import SectionContact from "../SectionContact/SectionContact";
import Footer from "../Footer/Footer";
import MenuBaner from "../MenuBaner/MenuBaner";
import MenuLists from "../MenuLists/MenuLists";

function Menu({ filterProduct, currentProduct }) {
  return (
    <>
      <Header />
      <MenuBaner />
      <MenuLists
        currentProduct={currentProduct}
        filterProduct={filterProduct}
      />
      <SectionContact />
      <Footer />
    </>
  );
}

export default Menu;

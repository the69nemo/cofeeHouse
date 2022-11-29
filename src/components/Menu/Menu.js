import React from 'react';
import './Menu.css';
import Header from '../Header/Header';
import SectionContact from "../SectionContact/SectionContact";
import Footer from '../Footer/Footer';
import MenuBaner from '../MenuBaner/MenuBaner';
import MenuLists from '../MenuLists/MenuLists';

function Menu() {
  return (
    <>
      <Header />
      <MenuBaner />
      <MenuLists />
      <SectionContact />
      <Footer />
    </>
   );
}

export default Menu;
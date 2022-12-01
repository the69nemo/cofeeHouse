import React from 'react';
import './About.css';
import Header from '../Header/Header';
import MoreAboutUs from '../MoreAboutUs/MoreAboutUs';
import AboutBaner from '../AboutBaner/AboutBaner';
import SectionContact from '../SectionContact/SectionContact';
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
    <Header />
    <MoreAboutUs />
    <AboutBaner />
    <SectionContact />
    <Footer />
    </>
   );
}

export default About;
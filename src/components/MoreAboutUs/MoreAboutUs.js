import React from "react";
import "./MoreAboutUs.css";
import Icon from "../../images/AboutUsIcon.svg";
import LinkComponent from "../LinkComponent/LinkComponent";
import Img1 from "../../images/AboutUsImg1.jpg";
import Img2 from "../../images/AboutUsImg2.jpg";

function MoreAboutUs() {
  return (
    <section className="aboutUs">
      <div className="aboutUs__container">
        <div className="aboutUs__title-wrapper">
          <h2 className="aboutUs__title">KNOW MORE ABOUT US</h2>
          <div className="aboutUs__title-line" />
        </div>
        <div className="aboutUs__content-container">
          <div className="aboutUs__left">
            <h3 className="aboutUs__content-title">
              We source sustainable &amp; line caught Foods
            </h3>
            <p className="aboutUs__content-subtitle">
              Edit this text to make it your own. To edit, simply click directly
              on the text to start adding your own words. You can move the text
              by dragging and dropping the text anywhere on the page.
            </p>
            <div className="aboutUs__card-wrapper">
              <div className="aboutUs__card">
                <div className="aboutUs__card-title-wrapper">
                  <img src={Icon} className="aboutUs__card-icon" alt="icon" />
                  <h4 className="aboutUs__card-title">10+ People</h4>
                </div>
                <p className="aboutUs__card-text">We are Small Team</p>
                <p className="aboutUs__card-text">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
              <div className="aboutUs__card">
                <div className="aboutUs__card-title-wrapper">
                  <img src={Icon} className="aboutUs__card-icon" alt="icon" />
                  <h4 className="aboutUs__card-title">2014</h4>
                </div>
                <p className="aboutUs__card-text">We are From</p>
                <p className="aboutUs__card-text">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
              <div className="aboutUs__card">
                <div className="aboutUs__card-title-wrapper">
                  <img src={Icon} className="aboutUs__card-icon" alt="icon" />
                  <h4 className="aboutUs__card-title">200k</h4>
                </div>
                <p className="aboutUs__card-text">We Served</p>
                <p className="aboutUs__card-text">
                  Through True Rich Attended does no end it his mother since
                  favourable.
                </p>
              </div>
            </div>
            <LinkComponent text="View menu" path="home" />
          </div>
          <div className="aboutUs__right">
            <img className="aboutUs__img" src={Img1} alt="cofee house" />
            <img className="aboutUs__img" src={Img2} alt="cofee house" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreAboutUs;

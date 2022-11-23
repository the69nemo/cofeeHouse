import React from "react";
import "./OurMenu.css";

function OurMenu() {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="serving__title-wrapper">
          <h2 className="serving__title">OUR MENU</h2>
          <div className="serving__title-line" />
        </div>
        <div className="menu__content-wrapper">
          <div className="menu__content-top">
            <h3 className="menu__content-title">Discover our menu chart</h3>
            <p className="menu__content-description">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
            <span className="menu__content-span">Most Popular Picks</span>
          </div>
          <div className="menu__content-bottom"></div>
        </div>
      </div>
    </section>
  );
}

export default OurMenu;

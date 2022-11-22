import React from "react";
import "./Promo.css";
import LinkComponent from "../LinkComponent/LinkComponent";
import RightImage from '../../images/PromoImage.jpg'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__left">
          <h1 className="promo__title">
            We serve high quality foods of all kinds.
          </h1>
          <p className="promo__subtitle">
            Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text.
          </p>
          <LinkComponent text="View menu" path="home" />
          <ul className="promo__contact-list">
            <li className="promo__contact-item">
              <p className="promo__contact-text">Opening Times</p>
              <span className="promo__contact-subtitle">Sunday to Saturday I 09:00 AM to 11:00 PM</span>
            </li>
            <li className="promo__contact-item">
              <p className="promo__contact-text">Location</p>
              <span className="promo__contact-subtitle">Master canteen, BBSR , Odisha 752054</span>
            </li>
            <li className="promo__contact-item">
              <p className="promo__contact-text">Call us</p>
              <span className="promo__contact-subtitle">+9776462441</span>
            </li>
          </ul>
        </div>
        <div className="promo__right">
          <img className="promo__img" src={RightImage} alt='cofee' />
        </div>
      </div>
    </section>
  );
}

export default Promo;

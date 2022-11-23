import React from "react";
import "./Serving.css";
import Icon1 from "../../images/serving/icon1.svg";
import Icon2 from "../../images/serving/icon2.svg";
import Icon3 from "../../images/serving/icon3.svg";
import Icon4 from "../../images/serving/icon4.svg";
import Icon5 from "../../images/serving/icon5.svg";
import Icon6 from "../../images/serving/icon6.svg";

function Serving() {
  return (
    <section className="serving">
      <div className="serving__container">
        <div className="serving__title-wrapper">
          <h2 className="serving__title">WHAT WE ARE SERVING</h2>
          <div className="serving__title-line" />
        </div>
        <div className="serving__content-wrapper">
          <h3 className="serving__content-title">
            We all have to eat, so why not do it beautifully?
          </h3>
          <p className="serving__content-description">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
          <ul className="serving__card-wrapper">
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon1} />
              </div>
              <h4 className="serving__card-title">Quafe Cake</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon2} />
              </div>
              <h4 className="serving__card-title">Cofee</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon3} />
              </div>
              <h4 className="serving__card-title">Fast Food</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon4} />
              </div>
              <h4 className="serving__card-title">Cocktails</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon5} />
              </div>
              <h4 className="serving__card-title">Grill</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
            <li className="serving__card">
              <div className="serving__card-icon-wrapper">
                <img className="serving__card-icon" alt="icon" src={Icon6} />
              </div>
              <h4 className="serving__card-title">Snacks</h4>
              <p className="serving__card-description">
                Through True Rich Attended no end it his mother since favourable
                real had half every him.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Serving;

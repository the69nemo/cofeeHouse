import React from "react";
import "./SectionContact.css";

function SectionContact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <ul className="contact__left-container">
            <li className="contact__item">
              <h3 className="contact__title">Working Hour</h3>
              <p className="contact__subtitle">
                Sunday to Saturday <br />
                09:00 AM to 11:00 PM
              </p>
            </li>
            <li className="contact__item">
              <h3 className="contact__title">Location</h3>
              <p className="contact__subtitle">
                Street - 127, <br />
                New York,United States <br />
                546544
              </p>
            </li>
            <li className="contact__item">
              <h3 className="contact__title">Contact us </h3>
              <p className="contact__subtitle">
                +123456789 <br />
                hey@yourdomain.com
              </p>
            </li>
          </ul>
        </div>
        <div className="contact__right"></div>
      </div>
    </section>
  );
}

export default SectionContact;

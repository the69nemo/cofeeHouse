import React from "react";
import "./Quote.css";
import Img from '../../images/video.jpg';

function Quote({handleOpenModal}) {
  return (
    <section className="quote">
      <div className="quote__container">
        <div className="quote__left">
          <h2 className="quote__title"><i>"</i></h2>
          <p className="quote__description">
            Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text by
            dragging and dropping the text
          </p>
          <div className="quote__signature-wrapper">
            <div className="quote__name-wrapper">
              <h3 className="quote__name">Joheny Andro</h3>
              <p className="quote__signature">Bhubaneswar, Odisha</p>
            </div>
            <div className="quote__avatar-wrapper">
            </div>
          </div>
        </div>
        <div className="quote__right">
          <img className="quote__img" src={Img} alt='video' />
          <button className="quote__btn" type='button' onClick={handleOpenModal}/>
        </div>
      </div>
    </section>
  );
}

export default Quote;

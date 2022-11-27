import React from "react";
import "./ReadCard.css";

function ReadCard({date, title, description, img}) {
  return (
    <section className="readCard">
      <div className="readCard__top">
        <span className="readCard__date">{date}</span>
        <h2 className="readCard__title">{title}</h2>
        <p className="readCard__description">{description}</p>
      </div>
      <div className="readCard__bottom">
        <img className="readCard__img" src={img} alt='cofee' />
      </div>
    </section>
  );
}

export default ReadCard;

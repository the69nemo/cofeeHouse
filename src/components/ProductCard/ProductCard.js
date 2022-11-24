import React from "react";
import "./ProductCard.css";

function ProductCard({ title, img, prise }) {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src={img} alt="cup of cofee" />
      </div>
      <div className="card__text-wrapper">
        <div className="card__title-container">
          <h2 className="card__title">{title}</h2>
        </div>
        <p className="card__prise">{`$${prise}`}</p>
      </div>
    </div>
  );
}

export default ProductCard;

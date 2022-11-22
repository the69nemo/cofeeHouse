import React from "react";
import { Link } from "react-router-dom";
import "./LinkComponent.css";
import Arrow from "../../images/Arrow.svg";

function LinkComponent({ path, text }) {
  return (
    <Link to={`/${path}`} className="link">
      <span className="link__text">{text}</span>
      <img src={Arrow} alt="arrow" />
    </Link>
  );
}

export default LinkComponent;

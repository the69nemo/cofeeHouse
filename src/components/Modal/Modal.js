import React, { useRef } from "react";
import "./Modal.css";

function Modal({ isOpen }) {
  // const videoRef = useRef();

  return (
    <div className={`overlay ${isOpen && "open"}`}>
      <div className="modal">
        <iframe
          width="720"
          height="460"
          src="https://www.youtube.com/embed/t8k71QcArnk?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;

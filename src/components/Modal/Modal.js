import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ isOpen, closeModal }) {
  const handleCloseByEsc = (evt) => evt.key === "Escape" && closeModal(evt);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
    }
    return () => document.removeEventListener("keydown", handleCloseByEsc);
  }, [isOpen]);

  return (
    <div className={`overlay ${isOpen && "open"}`} onClick={closeModal}>
      <div className="modal">
        <iframe
          width="720"
          height="100%"
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

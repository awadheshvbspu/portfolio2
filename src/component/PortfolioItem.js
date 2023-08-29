import React, { useState } from "react";
import Close from "../assets/close.svg";
import { details } from "../data";

export default function PortfolioItem({ img, title, details }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal_close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, i) => {
                return (
                  <li className="modal__item" key={i}>
                    <span className="item__icon">{icon}</span>
                    <div>
                      <spna className="item__title">{title}</spna>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}

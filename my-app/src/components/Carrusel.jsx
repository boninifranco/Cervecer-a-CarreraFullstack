import React from "react";
import "./Carrusel.css";
import imagen1 from '../assets/img/cerveceria1.jpeg'
import imagen2 from '../assets/img/cerveceria2.jpg'
import imagen3 from '../assets/img/cerveceria3.png'

export const Carrusel = () => {
  return (
    <div className="carrusel-container">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

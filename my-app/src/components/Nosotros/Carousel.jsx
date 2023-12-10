import React from 'react'
import imagen1 from "../../assets/imagenes/Beverages_Beer_Spain_Mahou_IDOM_01.jpg"
import imagen2 from "../../assets/imagenes/fabr.jpg"
import imagen3 from "../../assets/imagenes/fabrica-cerveza-artesanal.jpg"
import "./Carousel.css"


export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide container">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption-nosotros d-none d-md-block">
        <h5 className='titulo-grande'>Esta imagen captura la esencia de una cervecería artesanal en pleno funcionamiento.</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption-nosotros d-none d-md-block">
        <h5 className='titulo-grande'> Descubre nuestra exclusiva gama de cervezas artesanales, cuidadosamente elaboradas para satisfacer los paladares más exigentes.</h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption-nosotros d-none d-md-block">
        <h5 className='titulo-grande'>Sumérgete en el alma de nuestra operación, donde la creatividad y la destreza se entrelazan para dar vida a la magia cervecera.</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

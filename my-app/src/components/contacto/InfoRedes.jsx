import './InfoRedes.css'
import instagram from "../../assets/img/instagram.png";
import whatsapp from "../../assets/img/whatsapp.png";
import mail from "../../assets/img/mail.png";
import ubicacion from "../../assets/img/ubicacion.png";

export const InfoRedes = () => {
  return (
    <>
      <div className="componentInfo color-bg">
        <p className='paragraph'>
          Si querés información sobre cualquiera de nuestros productos o estás
          interesado en su distribución, rellená nuestro formulario y nos
          pondremos en contacto con vos lo antes posible.
        </p>
        <div>
          <ul className="ul-container">
            <li className="imgBox li-container">
              <a
                href="https://www.instagram.com/oktoberfest/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" className="image-section"></img>
              </a>
            </li>
            <li className="imgBox li-container">
              <a
                href="https://wa.me/2222222222"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" className="image-section"></img>
              </a>
            </li>
            <li className="imgBox li-container">
              <a
                href="mailto:stevejobs@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mail} alt="mail" className="image-section"></img>
              </a>
            </li>
            <li className="imgBox li-container">
              <a
                href="https://maps.app.goo.gl/g9uCksnpwctGbfjNA"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ubicacion} alt="ubicacion" className="image-section"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

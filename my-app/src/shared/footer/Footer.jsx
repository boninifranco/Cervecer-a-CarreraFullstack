import React from 'react';
import './footer.css';

import logoFacebook from '../../assets/icons/facebook.svg';
import logoInstagram from '../../assets/icons/instagram.svg';
import logoTwitter from '../../assets/icons/twitter.svg';
import logoWhatsapp from '../../assets/icons/whatsapp.svg';
import logoDireccion from '../../assets/icons/direccion.svg';
import logoEmail from '../../assets/icons/email.svg';

function Footer() {
  return (
    <React.Fragment>
      <footer className='footer'>
        <div className='container-social-media'>
          <a href="https://facebook.com" target='_blanck'>
          <img className='img-icon' src={logoFacebook} alt='logo-instagram' />
          </a>
          <a href="https://instagram.com" target='_blanck'>
          <img className='img-icon' src={logoInstagram} alt='logo-facebook' />
          </a>
          <a href="https://twitter.com" target='_blanck'>
          <img className='img-icon' src={logoTwitter} alt='logo-twitter' />
          </a>
        </div>
        <div className='container-info'>
          <div className='container-info-contact'>
            <img className='img-icon' src={logoWhatsapp} alt='logo-whatsapp' />
            <p className="info-contact">+49 7531 5847881</p>
          </div>
          <div className='container-info-contact'>
            <img className='img-icon' src={logoDireccion} alt='logo-direccion' />
            <p className="info-contact">Bolívar 1701, C1141 CABA</p>
          </div>
          <div className='container-info-contact'>
            <img className='img-icon' src={logoEmail} alt='logo-email' />
            <p className="info-contact">contactoastonbirra@astonbirra.com</p>
          </div>
        </div>
        <div className='info-developer'>
          <p>Desarrollado por Grupo 3</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { Footer }
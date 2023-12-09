import React from 'react'
import logoDireccion from '../../assets/icons/direccion.svg';
import './Horarios.css'
import logoHora from '../../assets/icons/horario.svg'

function Horarios() {
  return (
    <div className='ubicacion-horarios'>
        <img className='logo-ubicacion' width="200" height="200" src={logoDireccion} alt="" />
        <p><span className='color-primario-nosotros'>Klein Venedig 1, 78462 Konstanz, Alemania</span></p>
        <img className='logo-hora' width='200' height='200' src={logoHora} alt="" />
        <p><span className='color-primario-nosotros'>Lunes a viernes 19:30hs Sabado y domingo 18:00hs</span></p>
    </div>
  )
}

export default Horarios
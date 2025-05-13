import React from 'react'
import './Ubicacion.css'
import Horarios from './Horarios'

function Ubicacion() {
  return (
    <div className='ubicacion-container'>
        <Horarios/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5467720.011559213!2d4.7040813!3d47.9985389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479af7190f8b3563%3A0xbdb9475a2e7a314a!2sOktoberfest%20Konstanz!5e0!3m2!1ses-419!2sar!4v1701735852132!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Ubicacion
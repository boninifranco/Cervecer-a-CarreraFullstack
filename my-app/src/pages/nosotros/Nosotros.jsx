import React from 'react'
import "./Nosotros.css"
import Carousel from '../../components/Nosotros/Carousel'
import Body from '../../components/Nosotros/Body'
import Ubicacion from '../../components/Nosotros/Ubicacion'
import Horarios from '../../components/Nosotros/Horarios'



export default function Nosotros() {
  return (
   <div>
    <Carousel/>
    <Body/>
    <Ubicacion/>
   </div>
  )
}

<<<<<<< HEAD:my-app/src/componets/Card.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Card = ({ cerveza, descripción, image}) => {
    const handleDescripcion = () => {
        console.log (`Mostrando descripción: ${descripción}`); 
=======
import React from 'react'
import cardComponent from './cardComponent.css'

export const CardComponent = (props) => {
    const {cerveza, descripción, imagen } = props;

    const handleDescripcion = (descripción) => {
        console.log (`Mostrando descripción: ${descripción}`);
>>>>>>> f208fc5821a9dbb4d067523b4afe757c2fac556a:my-app/src/components/cards/CardComponent.jsx
    }

    const handleCompra = (cerveza) => {
        console.log ('Comprando cerveza: ${cerveza}');
    };

    return (
        <div className="card">
            <img src={image} alt={cerveza}/>
            <h2>{cerveza}</h2>
            <p>{descripción}</p>
            <button onClick={()=>handleDescripcion(descripción)}>Mostrar descripción</button> 
            <button onClick={()=>handleCompra(cerveza)}>Comprar</button>
        </div>
    );
};

<<<<<<< HEAD:my-app/src/componets/Card.js
export default Card; 
=======
export default CardComponent; 
>>>>>>> f208fc5821a9dbb4d067523b4afe757c2fac556a:my-app/src/components/cards/CardComponent.jsx

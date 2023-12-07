import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Card = ({ cerveza, descripción, image}) => {
    const handleDescripcion = () => {
        console.log (`Mostrando descripción: ${descripción}`); 
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

export default Card; 

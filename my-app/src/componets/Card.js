import React from 'react';
import "./CardComponet.css";

const CardComponent = (props) => {
    const {cerveza, descripción, imagen } = props;

    const handleDescripcion = (descripción) => {
        console.log (`Mostrando descripción: ${descripción}`);
    }

    const handleCompra = (cerveza) => {
        console.log (`Comprando cerveza: ${cerveza}`);
    };

    return (
        <div className="card">
            <img src={imagen} alt={cerveza}/>
            <h2>{cerveza}</h2>
            <p>{descripción}</p>
            <button onClick={()=>handleDescripcion(descripción)}></button>
            <button onClick={()=>handleCompra(cerveza)}>Comprar</button>
        </div>
    );
};

export default CardComponent; 

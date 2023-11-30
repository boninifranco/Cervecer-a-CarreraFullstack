import React from 'react';
import "./CardComponet.css";

const CardComponet = (props) => {
    const {cerveza, descripción, imagen } = props;

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

export default CardComponet; 

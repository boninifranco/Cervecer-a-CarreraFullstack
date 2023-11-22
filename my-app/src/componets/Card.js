import React from 'react';

const CardComponet = (props) => {
    const {cerveza, descripción, imagen } = props;

    return (
        <div className="card">
            <img src={imagen} alt={cerveza}/>
            <h2>{cerveza}</h2>
            <p>{descripción}</p>
        </div>
    );
};

export default CardComponet; 

import React from 'react';
import './card.css';

function Card(props) {
    return (
            <div className='product-card'>
                <div className='container-img'>
                    <img src={props.image} alt="" />
                </div>
                <div className='container-name'>
                    <p>Nombre: <span className='span-info'>{props.name}</span></p>
                </div>
                <div className='container-info-cerveza'>
                    <p>Alcohol: <span className='span-info'>{props.alcohol}%</span></p>
                    <p>IBU: <span className='span-info'>{props.ibu}</span></p>
                    <p>Precio: <span className='span-info'>$ {props.price}</span></p>
                </div>
                <div className='container-description'>
                    <p>Descripción: <span className='span-info'>{props.description}</span></p>
                </div>
            </div>
    )
}

export { Card }
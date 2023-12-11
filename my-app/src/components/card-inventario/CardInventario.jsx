import React, { useEffect } from 'react';
import './card-inventario.css';

function CardInventario(props) {
    const URL_API = `https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product/`;

    useEffect(() => {
       deleteCard();
    }, []);

    const deleteCard= async (e) => {
        try {
            const data = await fetch(`${URL_API}/${e.target.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const cervezas = await data.json();
        } catch(error) {

        }
    }

    const editCard = (e) => {
        props.idParaElPadre(e.target.id);
        props.buttonEditActive(true);
    }

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
                <p>Precio: <span className='span-info'>${props.price}</span></p>
            </div>
            <div className='container-description container-description-card-inventario'>
                <p>Descripción: <span className='span-info'>{props.description}</span></p>
            </div>
            <div className='container-buttons-delete-edit'>
                <button className='button-editar' id={props.id} onClick={editCard}>Editar</button>
                <button className='button-delete' id={props.id} onClick={deleteCard}>Borrar</button>
            </div>
        </div>
    )
}

export { CardInventario }
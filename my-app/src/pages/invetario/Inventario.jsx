import React, { useState, useEffect } from 'react';
import './inventario.css';

import { FormAddProduct } from '../../components/form-add-product/FormAddProduct';
import { CardInventario } from '../../components/card-inventario/CardInventario';


function Inventario() {
    const [cerveza, setCerveza] = useState([]);
    const [idCerveza, setIdCerveza] = useState(0);
    const [cervezaButtonBooleanEdit, setCervezaButtonBooleanEdit] = useState('');

    const URL_API = `https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product/`;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(URL_API);
            const cervezas = await data.json();
            setCerveza(cervezas);
        } catch (error) {
            console.log("Error catch inventario get", error);
        }
    }

    const idCardSon = (id) => {
        setIdCerveza(id);
        return idCerveza;
    }

    const buttonEditActive = (datoBoolean) => {
        setCervezaButtonBooleanEdit(datoBoolean);
        return cervezaButtonBooleanEdit;
    }

    return (
        <React.Fragment>
            <FormAddProduct idProducto={idCardSon}
                buttonEditActive={buttonEditActive} />
            <div className='card-container'>
                {cerveza.map((cerveza) => (
                    <CardInventario
                        key={cerveza.id}
                        image={cerveza.image}
                        name={cerveza.name}
                        alcohol={cerveza.alcohol}
                        ibu={cerveza.ibu}
                        price={cerveza.price}
                        description={cerveza.description}
                        id={cerveza.id}
                        idParaElPadre={idCardSon}
                        buttonEditActive={buttonEditActive}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export { Inventario }
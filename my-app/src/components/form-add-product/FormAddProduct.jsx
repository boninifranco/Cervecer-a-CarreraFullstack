import React, { useState } from 'react';
import './form-add-product.css';
import { ButtonForms } from '../button-forms/ButtonForms';

function FormAddProduct() {
    // const [idCerveza, setIdCerveza] = useState('');
    // const [buttonEditCerveza, setButtonEditCerveza] = useState('');

    const URL_API = `https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product/`;

    const [cerveza, setCerveza] = useState({
        name: '',
        alcohol: 0,
        ibu: 0,
        price: 0,
        description: '',
        image: ''
    });

    const [formActiveBoolean, setFormActiveBoolean] = useState(null);

    const handleInputChange = (e) => {
        setCerveza({
            ...cerveza,
            [e.target.name]: e.target.value
        });
    }

    const submitFormAddProduct = (e) => {
        try {
            e.preventDefault();
            const data = {
                name: cerveza.name,
                alcohol: cerveza.alcohol,
                ibu: cerveza.ibu,
                price: cerveza.price,
                description: cerveza.description,
                image: cerveza.image
            }
            fetch(URL_API, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.log('Error catch', error);
        }
    }

    const formActive = () => {
        setFormActiveBoolean(true);
    }

    return (
        <div className='form-container-add-product'>
            <form className={!formActiveBoolean ? 'form-add-product' : 'form-add-product-active'} onSubmit={submitFormAddProduct} >
                <div className='container-input-add-product-one'>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="name" className='label label-add-product'>Nombre</label>
                        <input type="text" name='name' id='name' onChange={handleInputChange} placeholder='Nombre' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="alcohol" className='label label-add-product'>Alcohol</label>
                        <input type="number" name='alcohol' id='alcohol' onChange={handleInputChange} placeholder='Alcohol' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                </div>
                <div className='container-input-add-product-two'>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="ibu" className='label label-add-product'>Ibu</label>
                        <input type="number" name='ibu' id='ibu' onChange={handleInputChange} placeholder='Ibu' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="price" className='label label-add-product'>Precio</label>
                        <input type="number" name='price' id='price' onChange={handleInputChange} placeholder='Precio' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                </div>
                <div className='container-input-add-product-three'>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="description" className='label label-add-product'>Descripcion</label>
                        <input type="text" name='description' id='description' onChange={handleInputChange} placeholder='Descripcion' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                    <div className='container-label-input-add-product'>
                        <label htmlFor="image" className='label label-add-product'>Imagen</label>
                        <input type="text" name='image' id='image' onChange={handleInputChange} placeholder='Imagen' autoComplete='off' className='input input-form-add-product' required />
                    </div>
                </div>
                <div className='container-button-form-add-product'>
                    <ButtonForms textContent='Agregar Producto' clase={!formActiveBoolean ? 'button-secundario button-secundario-add-product' : 'button-secundario button-secundario-add-product-active'} />
                </div>
            </form>
            <div className='container-button-form-add-product'>
                <button type='button' className={!formActiveBoolean ? 'button-principal button-principal-add-product' : 'button-principal-add-product-active'} onClick={formActive}>Añadir Producto</button>
            </div>
        </div>
    );
}

export { FormAddProduct }
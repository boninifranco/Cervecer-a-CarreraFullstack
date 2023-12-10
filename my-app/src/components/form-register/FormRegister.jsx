import React, { useState } from 'react';
import { useNavigate}  from 'react-router-dom';
import './form-register.css';

import { ButtonForms } from '../button-forms/ButtonForms';
import { HandleError } from '../handle-error/HandleError';
import { Modal } from '../modal/Modal';

function FormRegister() {

    const URL_API = `https://6570ff1c09586eff66422a67.mockapi.io/api/v1/users/`;

    const [datos, setDatos] = useState({
        name: '',
        lastname: '',
        age: 0,
        email: '',
        password: '',
        rePassword: ''
    });

    const navigate = useNavigate();

    const [messageErrorBoolean, setMessageErrorBoolean] = useState(false);
    const [messageErrorContent, setMessageErrorContent] = useState('');
    const [modalCreateUser, setModalCreateUser] = useState(null)

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const validatedPasswordRegister = () => {
        if (datos.password === datos.rePassword) {
            setMessageErrorBoolean(false);
            return true;
        } else {
            setMessageErrorBoolean(true);
            setMessageErrorContent('Ambas contraseñas deben coincidir');
            return false;
        }
    }

    const createUser = () => {
        console.log(datos);
        try {
            fetch(URL_API, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: { 'Content-Type': 'application/json' }
            })
            .then( data => data.json())
            .catch(error => console.log(error));
        } catch(error) {
            console.log(error);
        }
    }

    const submitRegister = (e) => {
        e.preventDefault();
        if (validatedPasswordRegister()) {
            createUser();
            setModalCreateUser(true);
        } else {
        }
    }

    return (
        <div className='register'>
                    {modalCreateUser ? <Modal /> : ''}
            <div className='container-image-login'>
                <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/06123915/cerveza-1920-2.jpg" alt="" />
            </div>
            <div className='form-container-register'>
                <form className='form-register' onSubmit={submitRegister}>
                    <label htmlFor='name' className='label'>Nombre</label>
                    <input type='text' name='name' id='name' onChange={handleInputChange} placeholder='Nombre' autoComplete='off' className='input input-register' required />
                    <label htmlFor='lastname' className='label'>Apellido</label>
                    <input type='text' name='lastname' id='lastname' onChange={handleInputChange} placeholder='Apellido' autoComplete='off' className='input input-register' required />
                    <label htmlFor='age' className='label'>Edad</label>
                    <input type='number' name='age' id='age' onChange={handleInputChange} placeholder='Edad' autoComplete='off' className='input input-register' required />
                    <label htmlFor='email' className='label'>Email</label>
                    <input type='email' name='email' id='email' onChange={handleInputChange} placeholder='Email' autoComplete='off' className='input input-register' required />
                    <label htmlFor='password' className='label'>Password</label>
                    <input type='password' name='password' id='password' onChange={handleInputChange} placeholder='**********' autoComplete='off' className='input input-register' required />
                    <div className='container-message-minvalue-password'>
                    <p className='message-minvalue-password'>La contraseña debe contener mínimo 8 caracteres</p>
                    </div>
                    <label htmlFor='rePassword' className='label label-register-repassword'>Repetir Password</label>
                    <input type='password' name='rePassword' id='rePassword' onChange={handleInputChange} placeholder='**********' autoComplete='off' className='input input-register input-register-repassword' required />
                    <HandleError message={messageErrorContent} clase={messageErrorBoolean ? 'message-error-active' : 'message-error'}></HandleError>
                    <ButtonForms textContent='Registrarse' clase='button-secundario' />
                </form>
            </div>
        </div>
    );
}

export { FormRegister }
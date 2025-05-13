import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form-login.css';

import logoCerveceria from '../../assets/img/logo-cerveceria.png'

import { ButtonForms } from '../button-forms/ButtonForms';
import { HandleError } from '../handle-error/HandleError';

function FormLogin() {

    const URL_API = `https://6570ff1c09586eff66422a67.mockapi.io/api/v1/users`;
    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    });

    const [messageError, setMessageError] = useState(false);

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    function getUsers(){
        try{
            fetch(URL_API)
            .then( data => data.json())
            .then(users => iterateUsers(users))
            .catch(error => console.log(error))
        }catch(error){
            console.log(error)
        }
    }

    function iterateUsers(users){
        users.forEach( user => validatedLogin(user));
    }

    function validatedLogin(user){
        if(datos.email === user.email && datos.password === user.password){
            navigate('/inventario');
        }else{
            setMessageError(true);
        }
    }

    const submitLogin = (e) => {
        getUsers();
        e.preventDefault();
    }

    return (
        <div className='login'>
            <div className='container-image-login'>
                <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/06123915/cerveza-1920-2.jpg" alt="" />
            </div>
            <div className='form-container'>
                <div className=' container-logo-astonbirra'>
                <img src={logoCerveceria} alt="" className='logo-cerveceria' />
                </div>
                <form className='form' onSubmit={submitLogin}>
                    <label htmlFor='email' className='label'>Email</label>
                    <input type='email' name='email' id='email' onChange={handleInputChange} placeholder='Email' autoComplete='off' className='input' required />
                    <label htmlFor='password' className='label'>Password</label>
                    <input type='password' name='password' id='password' placeholder='**********' onChange={handleInputChange} autoComplete='off' className='input' required />
                    <ButtonForms textContent='Log in' clase='button-principal' />
                    <HandleError message="Email o contraseña incorrecta" clase={messageError ? 'message-error-active' : 'message-error' } ></HandleError>
                    <Link to='/recovery-password'>Olvide mi contraseña</Link>
                </form>
                <Link to='/register' className='button-secundario link-register'>Registrate</Link>
            </div>
        </div>
    );
}

export { FormLogin }
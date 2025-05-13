import React from 'react';
import './form-recovery.css'

import { ButtonForms } from '../button-forms/ButtonForms';

function FormRecovery() {
    return (
        <div className='container-form-recovery'>
            <div className='form-recovery'>
                <p className=''>Introduce tu correo electrónico</p>
                <form className='form'>
                    <input type='text' name='recovery-password' className='input' placeholder='Email' autoComplete='off' />
                    <ButtonForms textContent='Enviar' type='button' clase='button-secundario' />
                </form>
            </div>
        </div>
    );
}

export { FormRecovery }
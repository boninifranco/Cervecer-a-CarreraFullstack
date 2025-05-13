import React from 'react';
import './modal.css';

function Modal() {
    return (
        <div className='container-modal'>
            <div className='modal'>
                <div className='container-button-exit-modal'>
                    <button type='button' className='button-exit-modal'><span>X</span></button>
                </div>
                <div className='container-message-modal'>
                    <p className='message-modal'>El usuario fue creado con éxito</p>
                </div>
            </div>
        </div>
    )
}

export { Modal }
import React from 'react';
import { Link } from 'react-router-dom';
import './form-email-sent.css';

import emailRecovery from '../../assets/icons/email-recovery.svg';

function FormEmailSent() {
    return (
        <div className="login-recovery-email-sent">
            <div className="form-container-recovery-email-sent">
                <h1 className="title-recovery-email-sent">El email ha sido enviado</h1>
                <p className="subtitle-recovery-email-sent">Por favor chequee en su bandeja de entrada y seguir las instrucciones para cambiar su contraseña </p>

                <div className="email-image">
                    <img src={emailRecovery} alt="email-logo" />
                </div>
                <Link to='/login' className="button-principal link-email-sent">Login</Link>
                <p className="resend"><span>¿No recibiste el correo?</span><a href="/">Reenviar</a></p>
            </div>
        </div>
    );
}

export { FormEmailSent }
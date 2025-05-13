import React from 'react';
import './login.css';

import { FormLogin } from '../../components/form-login/FormLogin';

function Login() {
  return (
    <React.Fragment>
      <FormLogin />
    </React.Fragment>
  );
}

export { Login }
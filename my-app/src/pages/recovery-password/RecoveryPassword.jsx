import React from 'react';
import './recoverypassword.css';

import { FormEmailSent } from '../../components/form-email-sent/FormEmailSent';
import { FormRecovery } from '../../components/form-recovery/FormRecovery';

function RecoveryPassword() {
    return (
     <React.Fragment>
      <FormRecovery />
      <FormEmailSent />
     </React.Fragment>
    );
  }

export { RecoveryPassword }
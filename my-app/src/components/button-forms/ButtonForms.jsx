import React from 'react';
import './button-forms.css';

function ButtonForms(props) {
  return (
    <button type="submit" className={props.clase}>{props.textContent}</button>
  );
}

export { ButtonForms }
import React from 'react';
import './handle-error.css';

function HandleError(props) {
    return (
        <p className={props.clase}>{props.message}</p>
    );
}

export { HandleError }
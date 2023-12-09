import React, { useState } from "react";
import './formulario.css';

export const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre:"",
    email:"",
    asunto:"",
    texto:"",
  })

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(datos);
  };

  return (
    <>
      <form className="formulario" onSubmit={enviarDatos}>
        <div className="mb-3">
          <label htmlFor="ingresoNombe" className="form-label label-cs">
            Nombre
          </label>
          <input
            type="text"
            id="ingresoNombe"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="ingresoEmail" className="form-label label-cs">
            Email
          </label>
          <input
            type="email"
            id="ingresoEmail"
            className="form-control"
            placeholder="email@ejemplo.com"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="ingresoAsunto" className="form-label label-cs">
            Asunto
          </label>
          <input
            type="text"
            id="ingresoAsunto"
            className="form-control"
            placeholder="Asunto"
            name="asunto"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="ingresoTexto" className="form-label label-cs">
            Texto
          </label>
          <textarea
            name="texto"
            id="ingresoTexto"
            className="form-control textarea-cs"
            cols="30"
            rows="10"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-warning">Enviar</button>
      </form>
    </>
  );
};

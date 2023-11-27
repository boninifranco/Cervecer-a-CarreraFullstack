import React from "react";

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
      [e.target.name] : e.target.value
    })
  };

  const enviarDatos = (e) => {
    e.preventDefault;
    //VER DONDE ENVIAR LOS DATOS
  };

  return (
    <>
      <form action="" onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Asunto"
          name="asunto"
          onChange={handleInputChange}
        />
        <textarea
          name="texto"
          cols="30" rows="10"
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

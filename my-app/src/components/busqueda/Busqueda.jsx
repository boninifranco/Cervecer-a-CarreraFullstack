import { useState } from "react";

export const Busqueda = () => {
    const url = 'https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product';

  const [busqueda, setBusqueda] = useState("");
  const [cervezas, setCervezas] = useState([])

  const handleInputChange = (e) =>{
    setBusqueda(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCervezas()
  }

  const fetchCervezas = async () =>{
    try{
        const response = await fetch(`${url}?query=${busqueda}`)
        const data = await response.json()
        setCervezas(data)
    }catch(error){
        console.error('Ha ocurrido un error: ', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Buscar"
          aria-label="Search"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button className="btnBuscar btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>

    

    </>
  );
};

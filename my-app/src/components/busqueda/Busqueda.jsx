import { useState, useEffect } from "react";
import "./busqueda.css";

export const Busqueda = () => {
  //setear los hooks useState
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la AP
  const url = "https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product";

  const showData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //metodo de filtrado
  let results = [];
  if (!search) {
    results = productos;
  } else {
    results = productos.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);
  //renderizamos la vista
  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
      />
      <div className="container d-flex justify-content-center h-100">
        <div className="row">
          {results.map((producto) => (
            <div key={producto.id} className="col-md-4">
              <div className="card card-style">
                <img
                  src={producto.image}
                  className="card-img-top custom-card-img"
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">{producto.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

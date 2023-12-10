import React, { useState} from 'react';
import { Card } from '../card/Card';
import ApiCaller from '../busqueda/ApiCaller';
import { Link } from 'react-router-dom';
import './demo.css'

function DemoProductos() {
  const [productos, setProductos] = useState([]);

  return (
    <div className="demo">
      <ApiCaller setProductos={setProductos} />
      <div className='card-secondContainer'>
        {productos.slice(0, 3).map((producto) => (
          <Card
            key={producto.id}
            image={producto.image}
            name={producto.name}
            alcohol={producto.alcohol}
            ibu={producto.ibu}
            price={producto.price}
            description={producto.description}
          />
        ))}
      </div>
      <button className="btn btn-outline-warning boton"><Link to="/productos">Ver más</Link></button>
    </div>
  );
}

export { DemoProductos };

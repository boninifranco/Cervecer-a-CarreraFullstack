import React, { useState} from 'react';
import { Card } from '../card/Card';
import ApiCaller from '../busqueda/ApiCaller';


function DemoProductos() {
  const [productos, setProductos] = useState([]);

  return (
    <>
      <ApiCaller setProductos={setProductos} />
      <div className='card-container'>
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
    </>
  );
}

export { DemoProductos };

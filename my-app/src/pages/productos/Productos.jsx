import React, { useEffect, useState } from 'react';
import './productos.css';
import { Card } from '../../components/card/Card';
import { SearchFilter } from '../../components/busqueda/SearchFilter';


function Productos() {
  const [cerveza, setCerveza] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const URL_API = `https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product/`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(URL_API);
    const cervezas = await data.json();
    setCerveza(cervezas);
  };

  const filteredCerveza = cerveza.filter((cerveza) =>
    cerveza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="search-div">
      <SearchFilter className="Search-box" setSearch={setSearchTerm}/>
      </div>
      <div className='card-container'>
        {filteredCerveza.map((cerveza) => (
          <Card
            key={cerveza.id}
            image={cerveza.image}
            name={cerveza.name}
            alcohol={cerveza.alcohol}
            ibu={cerveza.ibu}
            price={cerveza.price}
            description={cerveza.description}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export { Productos };
<<<<<<<< HEAD:my-app/src/pages/productos/SeccionCerveza.jsx
import React, { useState, useEffect } from "react";
import Card from "../componets/Card"; 
========
import React from "react";
>>>>>>>> f208fc5821a9dbb4d067523b4afe757c2fac556a:my-app/src/pages/productos/SeccionCerveza.js
import "./SeccionCerveza.css";
import { CardComponent } from "../../components/cards/CardComponent";

<<<<<<<< HEAD:my-app/src/pages/productos/SeccionCerveza.jsx


const mockData = [
    { name: "IPA", description: "Una cerveza India" , imagen : "https://img.freepik.com/foto-gratis/vista-frontal-vaso-oso-cips-queso-vino-ligero-bebida-alcoholica-color-aperitivo_140725-92989.jpg?w=360&t=st=1701110377~exp=1701110977~hmac=04fcf4a0c0a5a4b655a8b9442a605a6dd2efa68b698dd23cf838ee0a1c5542fc" },
    
    { name: "Stout", description: "Una cerveza oscura" , imagen : "https://img.freepik.com/foto-gratis/arreglo-sabrosa-cerveza-americana_23-2148907580.jpg?size=626&ext=jpg" }
  ];

const SeccionCerveza = () => {
 const [cervezas, setCervezas] = useState(mockData);
========
export const SeccionCerveza = () => {
  const [cervezas, setCervezas] = useState(mockData)([
    {
      name: "IPA",
      description: "Una cerveza India",
      imagen:
        "https://img.freepik.com/foto-gratis/vista-frontal-vaso-oso-cips-queso-vino-ligero-bebida-alcoholica-color-aperitivo_140725-92989.jpg?w=360&t=st=1701110377~exp=1701110977~hmac=04fcf4a0c0a5a4b655a8b9442a605a6dd2efa68b698dd23cf838ee0a1c5542fc",
    },

    {
      name: "Stout",
      description: "Una cerveza oscura",
      imagen:
        "https://img.freepik.com/foto-gratis/arreglo-sabrosa-cerveza-americana_23-2148907580.jpg?size=626&ext=jpg",
    },
  ]);
>>>>>>>> f208fc5821a9dbb4d067523b4afe757c2fac556a:my-app/src/pages/productos/SeccionCerveza.js

  useEffect(() => {
      // Lógica para obtener cervezas desde una API externa
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product"
        );
        if (!response.ok) {
          throw new Error("La API no responde correctamente");
        }

        const data = await response.json();
        console.log("Respuesta de la API:", data); 
        setCervezas(data); // Actualiza el estado y programa un nuevo renderizado
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
    console.log("Despues de la solicitud a la API");
  }, []); // Dependencia vacía para ejecutar solo una vez al montar el componente

  return (
    <div>
      <h2>Nuestras Cervezas</h2>
      <button>Descripción</button>
      {cervezas.map((cerveza, index) => (
        <Card
          key={index}
          name={cerveza.name} // cambiado {cerveza.name}
          descripction={cerveza.description ? "Completada" : "Pendiente"} 
          image={cerveza.imagen }
        />
      ))}
    </div>
  );
};

export default SeccionCerveza;

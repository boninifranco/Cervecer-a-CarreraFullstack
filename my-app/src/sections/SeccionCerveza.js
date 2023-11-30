import React from "react";
import CardComponet from "../componets/Card";
import "./SeccionCerveza.css";

const SeccionCerveza = () => {
    const cervezas = [
        { cervezas: "IPA", descripción: "Una cerveza India"},
        { cervezas: "Stout", descripción: "Una cerveza oscura"}
    ];

    return(
        <div>
        <h2>Nuestras Cervezas</h2>
        <button>Descrición</button>
        {cervezas.map ((cervezas, index)=> (
            <CardComponet
            key={index}
            cervezas={cervezas.cervezas}
            descripción={cervezas.descripción}
            />
        )
        )}
        
        </div>
    );
};

export default SeccionCerveza; 
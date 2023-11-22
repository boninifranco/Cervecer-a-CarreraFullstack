import React from "react";
import CardComponet from "../componets/Card";

const SeccionCerveza = () => {
    const cervezas = [
        { cervezas: "IPA", descripción: "Una cerveza India"},
        { cervezas: "Stout", descripción: "Una cerveza oscura"}
    ];

    return(
        <div>
        <h2>Sección Cervezas</h2>
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
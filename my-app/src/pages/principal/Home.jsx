import React from "react";
import './Home.css';
import Carouselhome from "../../components/home/Carouselhome";
import Videoilustrativo from "../../components/home/Videoilustrativo";

export const Home = () => {
    return <div className='Home'>
        <div className="Header">Navegador Web</div>
        <div className="BodyHome">
            <div className="Contenedor">
                <div className="PrimerCarrusel">
                    <Carouselhome />
                </div>
                <div className="VideoIlustrativo">
                    <Videoilustrativo />
                </div>
                <div className="ContenedorTarjetas">
                    Contenedor de Tarjetas Dinamico
                </div>
            </div>
        </div>
    </div>
};

export { Home }
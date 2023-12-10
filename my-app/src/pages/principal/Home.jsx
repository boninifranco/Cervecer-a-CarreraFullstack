import React from "react";
import Carouselhome from "../../components/home/Carouselhome";
import Videoilustrativo from "../../components/home/Videoilustrativo";
import { DemoProductos } from "../../components/home/DemoProductos";
import './Home.css'

export const Home = () => {
  return (
    <div className="Home">
      <div className="Header">Navegador Web</div>
      <div className="BodyHome">
        <div className="Contenedor">
          <div className="PrimerCarrusel">
            <Carouselhome />
          </div>
          <div className="VideoIlustrativo">
            <Videoilustrativo />
          </div>
          <div>
            <DemoProductos/>
          </div>
        </div>
        <div className="FooterHome">Yo soy el Footer</div>
      </div>
    </div>
  );
};

export default Home;

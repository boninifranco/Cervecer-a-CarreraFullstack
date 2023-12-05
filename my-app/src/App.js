import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/principal/Home";
import { Contacto } from "./pages/contacto/Contacto";
import { Header } from "./shared/header/Header";
import { Footer } from "./shared/footer/Footer";
import Nosotros from "./pages/nosotros/Nosotros";
import "./App.css";
import "./pages/principal/Home.css";
import SeccionCerveza from "./pages/productos/SeccionCerveza";

function App() {
  return (
    <>
      <Header/>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home></Home>}></Route>
              <Route path="/Nosotros" element={<Nosotros></Nosotros>}></Route>
              <Route path="/inicio" element={<Home></Home>}></Route>
              <Route path="/contacto" element={<Contacto></Contacto>}></Route>
              <Route path="/cerveza" element={<SeccionCerveza></SeccionCerveza>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      <Footer/>
    </>
  );
}

export default App;

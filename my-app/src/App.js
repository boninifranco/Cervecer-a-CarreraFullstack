import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/principal/Home";
import { Contacto } from "./pages/contacto/Contacto";
import { Header } from "./shared/header/Header";
import { Footer } from "./shared/footer/Footer";
import React from "react";
import Nosotros from "./pages/nosotros/Nosotros";


function App() {
  return (
    <>
      <Header/>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home></Home>}></Route>
              <Route path="/Nosotros" element={<Nosotros></Nosotros>}></Route>
              <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      <Footer/>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/principal/Home";
import { Contacto } from "./pages/contacto/Contacto";
import { Header } from "./shared/header/Header";
import { Footer } from "./shared/footer/Footer";
import React from "react";


function App() {
  return (
    <>
      <Header/>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/inicio" element={<Inicio></Inicio>}></Route>
              <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      <Footer/>
    </>
  );
}

export default App;

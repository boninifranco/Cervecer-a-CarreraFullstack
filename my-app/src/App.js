import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/principal/Home";
import { Contacto } from "./pages/contacto/Contacto";
import { Header } from "./shared/header/Header";
import { Footer } from "./shared/footer/Footer";
import { Productos} from "./pages/productos/Productos";
import Nosotros from "./pages/nosotros/Nosotros";
import "./App.css";
import "./pages/principal/Home.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

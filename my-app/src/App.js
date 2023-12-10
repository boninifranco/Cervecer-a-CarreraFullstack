import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/principal/Home";
import Nosotros from "./pages/nosotros/Nosotros";
import { Productos} from "./pages/productos/Productos";
import { Contacto } from "./pages/contacto/Contacto";
import { Login } from './pages/login/Login';
import { RecoveryPassword } from './pages/recovery-password/RecoveryPassword';
import { Register } from './pages/register/Register';
import { Header } from "./shared/header/Header";
import { Footer } from "./shared/footer/Footer";
import "./App.css";

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

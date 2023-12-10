import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-cerveceria.png"

export const Header = () => {
  return (
    <div className="Header">
      <nav className="navPersonalizado navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="logoNav"><img src={logo} width="100px" height="100px" alt="" /></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="posicionar navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link" role="button">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://localhost:3000/contacto"
                  aria-disabled="true"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

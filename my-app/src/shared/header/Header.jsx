import React from 'react'
import { Busqueda } from '../../components/busqueda/Busqueda'


export const Header = () => {
  return (
    <div className="Header">
    <nav className="navPersonalizado navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className='logoNav'></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="posicionar navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Usuarios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" role="button"  aria-expanded="false">
            Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="button" >Cervezas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='http://localhost:3000/contacto' aria-disabled="true">Contacto</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btnBuscar btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

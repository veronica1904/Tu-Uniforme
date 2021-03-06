import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css'

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm navbar">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-decoration-none" to="/">
          Tu Uniforme
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" to="/products">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" to="/about">
                  Sobre Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" to="/contact">
                  Contactos
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark text-decoration-none">
                   <i className="fa fa-sign-in me-1"></i> Iniciar Sesión</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2 text-decoration-none">
                   <i className="fa fa-user-plus me-1"></i> Registrarse</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 text-decoration-none">
                   <i className="fa fa-shopping-cart me-1"></i> Carrito ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget"

export const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to={'/'} className="navbar-brand">Serendipia</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link to={''}className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorías
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to={'/category/oraculo'} className="dropdown-item">Oraculos</Link>
            <Link to={'/category/accesorios'} className="dropdown-item" href="#">Accesorios</Link>
            <div className="dropdown-divider"></div>
            <Link to={'/category/cursos'} className="dropdown-item" href="#">Cursos</Link>
          </div>
        </li>
        <li className="nav-item">
          <Link to={'/Nosotros'} className="nav-link" href="#">Nosotros</Link>
        </li>
        <li className="nav-item"><CartWidget/></li> 
      </ul>
    </div>
  </nav>
};
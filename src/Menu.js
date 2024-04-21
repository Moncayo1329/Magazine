import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nunka from './Image/nunka.jpg'

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <li className="navbar-brand nav-item"><Link to="/">
         <img src={Nunka} alt="Nunka logo"
       className="logo"
      ></img>
      </Link></li>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <nav className="nav-item"><Link to="/" className="nav-link">Inic</Link></nav>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/fotos" className="nav-link">Fotos</Link></li>
              <li className="nav-item"><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu };
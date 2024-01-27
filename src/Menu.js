import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
    <div className="Menu">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li><Link to="/fotos">Fotos</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Menu };

  
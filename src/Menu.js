import React from "react";
import './App.css';
import { Link } from "react-router-dom";


function Menu() {
  return (
    <div className="Menu">
      <nav>
        <ul>
          <Link to="/">
          <h2 className="titulo ">Núnka</h2></Link>
           <li>
            <Link to="/fotos">Fotos</Link> </li>

            <li>
            <Link to="/blog">
          Blog </Link> </li>

          <li>
            <Link to="/nosotros">
            Nosotros</Link></li>
          
        </ul>
      </nav>

 

    </div>
  );
}

export { Menu };

  
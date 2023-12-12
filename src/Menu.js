import React from "react";
import { Fotos } from "./fotos";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <nav>
        <ul>
          <h2 className="titulo">Núnka</h2>
          <li>
            <Link to={`/Fotos/${Fotos.link}`}>Fotos</Link>
          </li>
          <li>Blog</li>
          <li>Nosotros</li>
        </ul>
      </nav>
    </div>
  );
}

export { Menu };

  
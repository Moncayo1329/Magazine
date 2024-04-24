// Fotos.js
import React from "react";
import { Menu } from "./Menu";
import { Footer } from "./footer";
import {Render} from "./fotosrender"; // Importa Render como componente predeterminado
import { Fotosblog } from "./data/fotospost";

function Fotos() {
  return (
    <div>
      <Menu />
      <Render fotos={Fotosblog} />
      <Footer />
    </div>
  );
}

export {Fotos};

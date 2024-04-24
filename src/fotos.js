import React from "react";
import { Menu } from "./Menu";
import { Footer } from "./footer";
import {Render} from "./fotosrender"; // Importa Render como componente predeterminado
import { FotosData } from "./data/fotospost";

function Fotos() {
  return (
    <div>
      <Menu />
      <Render fotos={FotosData} />
      <Footer />
    </div>
  );
}

export {Fotos};
import React from "react";
import { Menu } from "../Menu";
import { Footer } from "../footer";
import Foto1 from "../Imagenes/imgMachuPichu/foto2.png";
import Foto2 from "../Imagenes/imgMachuPichu/IMG_1053.png";


function Machu() {
  return (
    <div>
      <Menu /> 
      <section className="bloglist">
     <img src={Foto1} />
     <img src={Foto2} />


      </section>
      
      <Footer />
    </div>
  );
}

export {Machu};
import React from "react";
import { Menu } from "./Menu";
import {Footer} from "./footer"
import Foto2 from "./Imagenes/imgMachuPichu/foto2.png"
import Foto3 from "./Imagenes/imgMachuPichu/foto3.png"
import Foto4 from "./Imagenes/imgMachuPichu/IMG_1053.png"

function Fotos() {
  return (
    <div>
      <Menu />
      <section className="testimonios seccion-clara">
  <h2 className="seccion-titulo"></h2>
  <div className="container">
    <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
          <img src={Foto2} className="testimonio-imagen  d-block w-100" alt="Primera imagen" />
          <div>
            <p className="testimonio">Machu Pichu</p>
          </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="container">
          <img src={Foto3} className="testimonio-imagen  d-block w-100" alt="Primera imagen" />
          <div>
            <p className="testimonio">Machu Pichu</p>
          </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="container">
          <img src={Foto4} className="testimonio-imagen  d-block w-100" alt="Primera imagen" />
          <div>
            <p className="testimonio">Machu Pichu</p>
          </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
    <div className="cuadro"></div>
  </div>
</section>


      <Footer />
    </div>
  );
}

export { Fotos };

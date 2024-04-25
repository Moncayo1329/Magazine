import React from "react";
import './App.css';

function Render({ fotos }) {
  return (
    <section className="testimonios seccion-clara">
  <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {fotos.map(foto => (
			 foto.imgs.map((img, imgIndex) => (
        <div key={imgIndex} className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}>
            <img
              key={imgIndex}
              src={img}
              className="testimonio-imagen d-block w-100"
              alt={`Imagen ${imgIndex + 1}`}
            />
          <div>
            <p className="testimonio" style={{}}>{foto.Title}</p>
          </div>
        </div>
        ))
      ))}
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
</section>

  
  );
}

export { Render };

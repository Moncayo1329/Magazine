import React from "react";
import './App.css';

function Render({ fotos }) {
  return (
    <section className="testimonios seccion-clara">
  <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {fotos.map(foto => (
			 foto.imgs.map((img, imgIndex) => (
        <div key={imgIndex}>
            <img 
            className="fotoslist" alt='' width='50px'
              key={imgIndex}
              src={img}
            />
          <div>
            <p className="testimonio" style={{}}>{foto.Title}</p>
          </div>
        </div>
        ))
      ))}
    </div>
  </div>
</section>

  
  );
}

export { Render };

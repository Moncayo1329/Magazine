import React from "react";
import './App.css'
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Comprame from "./button";



function Footer() {
  return (
    <footer className="contacto seccion-oscura d-flex-column aling-items-center justify-conten-center">
      <p className="footer-texto text-center">Para mantener la página libre de anuncios. <br></br>Cómprame
</p> 
<Comprame />
  


      <div className="iconos-redes-sociales d-flex flex-wrap aling-items-center justify-content-center">
        <a href="https://twitter.com/MichaelMoncay7" className="text-decoration-none" style={{ color: '#46526f'}}> <FaTwitter /></a> 
        <a href="https://github.com/Moncayo1329" className="text-decoration-none" style={{ color: '#46526f' }}> <FaGithub /></a>
        <a href="mailto:moncayomichael23@gmail.com" className="text-decoration-none" style={{ color: '#46526f' }}> <MdEmail /></a>
      </div>
      <div className="derechos-de-autor">Creado por Michael Moncayo (2023) &#169; </div>
    </footer>
  );
}

export { Footer };

  
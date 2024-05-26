import React from "react";
import { Menu } from "./Menu";
import { FotosData } from "../src/data/fotospost"; // Cambiado a Blogs
import {Render }from "./fotosrender";
import { Footer } from "./footer";


function Fotos(props) {
  return (
    <div>
      <Menu /> 
      {/* Aquí escribir blogs en en markdown y unir a esta página*/} 
      <section className="bloglist"> 
        {FotosData.map((FotosData, index) => ( 
          <Render
            key={index} 
            img={FotosData.img} 
            Title={FotosData.Title} 
            Description={FotosData.Description}
            Link={FotosData.Link}
          />
        ))} 
      </section>
      <Footer />
    </div>
  );
}

export {Fotos};
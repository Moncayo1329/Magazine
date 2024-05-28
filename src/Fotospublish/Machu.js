import React from "react";
import { Menu } from "../Menu";
import { MachuFotos } from "../data/Machufotos"; 
import { MachuRender } from "../RenderPost/MachuRender";
import { Footer } from "../footer";



function Machu(props) {
  return (
    <div>
      <Menu /> 
      <section className="bloglist"> 
     {MachuFotos.map((MachuFotos,index) => (
    <MachuRender
    key={index}
    img={MachuFotos.img}
    Title={MachuFotos.Title}
    
    
    
    />



     ))}
      </section>
      
      <Footer />
    </div>
  );
}

export {Machu};
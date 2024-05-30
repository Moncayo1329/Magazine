import React from "react";
import { Menu } from "../Menu";
import {PlayasFotos } from "../data/Rioplayas"; 
import { PlayasRender } from "../RenderPost/Rioplayasrender";
import { Footer } from "../footer";



function RioPlayas(props) {
  return (
    <div>
      <Menu /> 
      <section className="bloglist"> 
     {PlayasFotos.map((PlayasFotos,index) => (
    <PlayasRender
    key={index}
    img={PlayasFotos.img}
    Title={PlayasFotos.Title}
    
    
    
    />



     ))}
      </section>
      
      <Footer />
    </div>
  );
}

export {RioPlayas};
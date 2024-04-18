import React from "react";
import { Menu } from "./Menu";
import { Blogs } from "../src/data/blogpost"; // Cambiado a Blogs
import Renderpost from "./renderpost";

function Blog(props) {
  return (
    <div>
      <Menu /> 
      {/* Aqui escribir blogs en en mardown y unir a esta pagina*/} 
      <section className="Articulolist"> 
        {Blogs.map((blog, index) => ( 
          <Renderpost 
            key={index} 
            img={blog.img} 
            Title={blog.Title} 
            Description={blog.Description} 
          />
        ))}
      </section>
    </div>
  );
}
   
export { Blog };

  
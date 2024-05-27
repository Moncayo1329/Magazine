import React from "react";
import { Menu } from "./Menu";
import { Blogs } from "../src/data/blogpost"; // Cambiado a Blogs
import Renderpost from "./renderpost";
import { Footer } from "./footer";

function Blog(props) {
  return (
    <div>
      <Menu /> 
      {/* Aquí escribir blogs en en markdown y unir a esta página*/} 
      <section className="bloglist"> 
        {Blogs.map((blog, index) => ( 
          <Renderpost 
            key={index} 
            img={blog.img} 
            Title={blog.Title} 
            Description={blog.Description}
            Link={blog.Link}  
          />
        ))} 
      </section>
      <Footer />
    </div>
  );
}
   
export { Blog };

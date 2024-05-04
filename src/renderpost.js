import React from "react";
import { Link } from "react-router-dom";

function Renderpost(props) {
  const handleClick = () => {
    // Agrega aquí la lógica para manejar el clic del usuario
    console.log("Blog clicked:", props.Title);
  };
  return (
    <Link>
    <article className="blog"> 
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1> 
      <p>{props.Description}</p>
    </article>
  </Link>
);
}

export default Renderpost;

import React from "react"; 
import './App.css'; 

function Renderpost(props) {
  return (
    <article className="blog"> 
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1> {/* Corregido a props.Title */}
      <p>{props.Description}</p>
    </article>
  );
}

export default Renderpost;

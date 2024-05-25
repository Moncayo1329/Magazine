import React from "react";
import './App.css';

function Render(props) {
  return (
    <a href={`${props.Link}`}>
    <article className="blog"> 
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1> 
      <p>{props.Description}</p>
    </article>
  </a>

  
  );
}

export { Render };

import React from "react";
import './App.css';
import { HiMenuAlt4 } from "react-icons/hi";

function Render(props) {
  return (
    <a href={`${props.Link}`}>
    <article className="blog"> 
      <img src={props.img} alt='' width='50px' />
      <h6>{props.Title}</h6> 
      <p>{props.Description}</p>
    </article>
  </a>

  
  );
}

export { Render };

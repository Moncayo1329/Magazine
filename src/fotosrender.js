import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

function Render(props) {
  return (
    <Link to={props.Link}>
    <article className="blog"> 
      <img src={props.img} alt='' width='50px' />
      <h6>{props.Title}</h6>
      <p>{props.Description}</p>
    </article>
  </Link>

  
  );
}

export { Render };

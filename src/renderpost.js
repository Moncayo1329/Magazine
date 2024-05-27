import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

function Renderpost(props) {
  return (
    <article className="blog"> 
    <Link to={props.Link}  style={{ textDecoration: 'none' }}>
      <img src={props.img} alt='' width='50px' />
      <h1 style={{ color: '#161748' }}>{props.Title}</h1> 
      <p style={{ color: '#46526f' }}>{props.Description}</p>
  </Link>
  </article>
);
}

export default Renderpost;

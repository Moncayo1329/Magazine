import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

function Render(props) {
  return (
    <article className="blog" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}> 
    <Link to={props.Link}  style={{ textDecoration: 'none' }}>
    <img src={props.img} alt='' width='50px' />
      <h4 style={{ color: '#161748' }}>📍{props.Title}</h4>
      <p>{props.Description}</p>
  </Link>
  </article>
  
  );
}

export { Render };

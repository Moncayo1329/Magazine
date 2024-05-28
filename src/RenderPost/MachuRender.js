import React from "react";


function MachuRender(props) {
    return (
    <article className="blog" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}> 
    <img src={props.img} alt='' width='130px' />
    <p style={{ color: '#161748' }}>{props.Title}</p>
    </article>
    
    );
  }
  
  export { MachuRender};
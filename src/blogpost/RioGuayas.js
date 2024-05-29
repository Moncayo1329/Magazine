import React, { useEffect, useState } from 'react';
import Markdown from "markdown-to-jsx";
import { Menu } from '../Menu';
import { Footer } from '../footer'; // Asegúrate de que 'Footer' esté correctamente capitalizado.

function Rio() {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../Escritos/RioGuayas.md`) // Ajusta la ruta según la ubicación real del archivo
      .then(res => {
        return fetch(res.default);
      })
      .then(response => {
        return response.text();
      })
      .then(text => {
        setContent(text);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Menu />
      <section className="post">
        <Markdown>{content}</Markdown>
      </section>
      <Footer />
    </div>
  );
}

export { Rio };

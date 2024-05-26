import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM correctamente
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Fotos } from './fotos';
import { App } from './App';
import { Blog } from './blog';
import { Nosotros } from './nosotros';
import { Machu } from './Fotospublish/Machu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Main() {
  return (
    <BrowserRouter>
      <Link></Link>
      <Routes>
         {/* Rutas principales */}
        <Route path="/" element={<App />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* Ruta para blogs*/}
         {/* Ruta para Fotos */}
        <Route path="/fotos/MachuPichu" element={<Machu />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();

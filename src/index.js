import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación aquí
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Fotos } from './fotos';
import { App } from './App';
import { Blog } from './blog';
import { Nosotros } from './nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Main() {
  return (
    <BrowserRouter>
      <Link></Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />} />
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

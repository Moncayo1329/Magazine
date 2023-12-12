import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { Fotos } from './fotos';
import reportWebVitals from './reportWebVitals';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Fotos" element={<Fotos />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

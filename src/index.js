import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Fotos } from './fotos';
import { Inicio } from './Inicio';



function Main() {
	return (
		<BrowserRouter>
    <Link></Link>
			<Routes>
				<Route path="/Inicio" element={<Inicio />} />
        <Route path="/fotos" element={<Fotos />} />
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


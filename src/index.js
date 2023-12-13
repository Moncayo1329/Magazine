import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Fotos } from './fotos';
import { App } from './App';
import { Blog } from './blog';
import { Nosotros } from './nosotros';



function Main() {
	return (
		<BrowserRouter>
    <Link></Link>
			<Routes>
				<Route path="/" element={<App />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/nosotros" element={<Nosotros />}/>
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


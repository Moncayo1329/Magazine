import './App.css';
import Menu from './Menu';
import image from './Image/NúnkaMagazine.png'
import About from './about';
import experimento from './Image/experimento.png'
import './about.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div className='foto-logo'>
      <img src={image} alt="Logo" />
      <div className='foto-about'>
      <img src={experimento} alt="foto" /> </div>
    </div>
  
  
        <Menu />
        
      </header>
  
      <About />
     
      
    </div>
  
  );
}

export default App;

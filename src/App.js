import './App.css';
import Menu from './Menu';
import image from './Image/NúnkaMagazine.png'
import About from './about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div className='foto-logo'>
      <img src={image} alt="Logo" />
    </div>
        <Menu />
        
      </header>
  
      <About />
      
    </div>
  
  );
}

export default App;

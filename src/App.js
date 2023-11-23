import './App.css';
import Menu from './Menu';
import image from './Image/NúnkaMagazine.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <div className='foto-logo'>
      <img src={image} alt="Logo" />
    </div>
        <Menu />
      </header>
    </div>
  
  );
}

export default App;

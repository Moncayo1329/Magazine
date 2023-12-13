import { Menu } from './Menu';
import { About } from './about';
import './about.css';

function Inicio() {
  return (
    <div className="App">
      <Menu />
      <About />
      
    </div>
  );
}

export { Inicio };

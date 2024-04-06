import { Menu } from "./Menu";
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Nosotros() {
  return (
    <div>
      <Menu />
      <div className="container mt-5 pb-5 text-center" style={{ color: '#000' }}>
        <h2>¿Qué es Núnka?</h2>
        <p style={{ color: '#46526f' }}> Nunka es un sitio web hippie con el objetivo 
          de compartir experiencias, fotografías, comidas, blogs, bebidas, escritos y viajes.</p>

        <h2>¿Por qué creamos Núnka?</h2>
        <p style={{ color: '#46526f' }}>Creemos que viajar es para cada persona, nos enseña sobre nosotros
          y aprendemos de los demás.
          <br></br>Viajar no debería depender del lugar de donde vienes, cada persona tiene el derecho de conocer 
          y traspasar fronteras, ya sea por viajar o por 
          situaciones de vida. <br></br>
          Dios creó el mundo sin fronteras.</p>

        <h2>¿Cuál es nuestro objetivo?</h2>
        <p style={{ color: '#46526f' }}>Nuestro objetivo es divertirnos y
           publicar cualquier experiencia, pequeña o grande, 
           experimentar el placer de la exploración. <br></br>
           Porque creemos que esto construye un mundo más amable, más inclusivo y más abierto.
           <br></br> Creemos que viajar abre la puerta a las experiencias más maravillosas 
           e inolvidables que la vida puede ofrecer. 
           <br></br>Hemos aprendido que el mejor viaje consiste en exponerse,<br></br>
            en dejar atrás lo cotidiano, 
            en sumergirse, 
            en lugar de limitarse a ver las vistas.</p>

        <h2>¿Quién está detrás de la web?</h2>
        <p style={{ color: '#46526f' }}>Este sitio fue creado y programado por Michael Moncayo.<br></br>Creé este sitio con el objetivo de divertirme pero también porque me gusta viajar y<br></br> creo que todos deberían poder hacerlo independientemente de dónde vengan.<br></br>
          El mundo debería ser más abierto y sin burocracia, <br></br>estamos ante un nuevo mundo, no dejemos que las ideas boomers no nos dejen avanzar hacia el futuro. 
          <br></br>Programé este sitio desde cero porque me gusta hacer proyectos en mi tiempo libre. <br></br>
          Si la vida me lo permite, iré mejorando la website así que cualquier feedback será más que bienvenido. <br></br>
          Disfruten de la página HIPPIES.</p>
        
        <a href="https://twitter.com/MichaelMoncay7" className="text-decoration-none" style={{ color: '#46526f'}}> <FaTwitter /> @michaelmoncayo7</a> <br></br>
        <a href="https://github.com/Moncayo1329" className="text-decoration-none" style={{ color: '#46526f' }}> <FaGithub /> @Moncayo1329</a><br></br>
        <a href="mailto:moncayomichael23@gmail.com" className="text-decoration-none" style={{ color: '#404040' }}> <MdEmail /> moncayomichael23@gmail.com</a>	
      </div>
    </div>
  );
}

export { Nosotros };

import './App.css'

function About() {
  return (
    <section className='frase align-items-stretch justify-content-center'>
      <h1 className="waviy" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center', // Alinear el texto al centro
        fontSize: '4rem' // Hacer el tamaño de la fuente relativo al tamaño de la pantalla
      }}>
        <span style={{ '--i': 1 }}>El</span>
        <span className='section-all' style={{ '--i': 2 }}>mundo</span>
        <span style={{ '--i': 2 }}>es de</span>
        <span className='section-all' style={{ '--i': 2 }}>Todos🌍</span>
      </h1>
    </section>
  );
}

export { About };

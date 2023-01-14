import './App.css';
import Testimonios from './componentes/Testimonios';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de nuestros usuarios</h1>
        <Testimonios 
          nombre="Hank"
          pais="COL"
          cargo="Ingeniero civil"
          empresa="Argos"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imagen="man"/>
        <Testimonios 
          nombre="Anna"
          pais="COL"
          cargo="Ingeniera civil"
          empresa="BBC"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imagen="woman"/>
        <Testimonios 
          nombre="Maria"
          pais="COL"
          cargo="Ingeniera civil"
          empresa="ABC"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imagen="woman"/>
      </div>
    </div>
  );
}

export default App;

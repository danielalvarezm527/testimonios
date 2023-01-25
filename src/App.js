import './App.css';
import Testimonios from './componentes/Testimonios';

const user_info = [
  {
    nombre:"Hank",
    pais:"COL",
    cargo:"Ingeniero civil",
    empresa:"Argos",
    testimonio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:"man"
  },
  {
    nombre:"Anna",
    pais:"COL",
    cargo:"Ingeniera civil",
    empresa:"BBC",
    testimonio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:"woman"
  },
  {
    nombre:"Hank",
    pais:"COL",
    cargo:"Ingeniero civil",
    empresa:"Argos",
    testimonio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:"man"
  },
  {
    nombre:"Maria",
    pais:"COL",
    cargo:"Ingeniera civil",
    empresa:"ABC",
    testimonio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:"woman"
  },
  {
    nombre:"Anna",
    pais:"COL",
    cargo:"Ingeniera civil",
    empresa:"BBC",
    testimonio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imagen:"woman"
  }
];

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de nuestros usuarios</h1>
          {user_info.map((info) => {
            return <Testimonios 
                    nombre={info.nombre}
                    pais={info.pais}
                    cargo={info.cargo}
                    empresa={info.empresa}
                    testimonio={info.testimonio}
                    imagen={info.imagen} />
          })}
      </div>
    </div>
  );
}

export default App;

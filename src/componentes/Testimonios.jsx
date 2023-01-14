import React from "react";
import "../css/Testimonios.css"

function Testimonios(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" 
        src={require(`../imagenes/${props.imagen}-icon.png`)} 
        alt="profile" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> De <strong>{props.pais}</strong></p>
        <p className="cargo-testimonio"><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
        <p className="texto-testimobio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonios;
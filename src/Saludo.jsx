import React from 'react';
import ReactDOM from 'react-dom/client';

function Contenedor(props) {
  const estilo = {
    border: '5px solid black',
  };

  return <div style={estilo}>{props.children}</div>;
}

function Saludo(props) {
  return <Contenedor><h1>{props.saludo}, {props.name} {props.lastName}!</h1></Contenedor>;
}

export default Saludo;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saludo from "./Saludo.jsx";
import Contador from './state.jsx';


let Nombre = prompt("Digita tu nombre");
let Apellido = prompt("Digita tu apellido");
let saludo;
let Leng = prompt("Elige el idioma");
switch (Leng) {
  case 'es':
    saludo = 'Hola, ¿Cómo te encuentras?';  // Saludo en español
    break;
  case 'en':
    saludo = 'Hello, How are you?';  // Saludo en inglés
    break;
  case 'fr':
    saludo = 'Bonjour, Comment ça va?';  // Saludo en francés
    break;
  default:
    saludo = 'Hola, ¿Cómo te encuentras?';  // Saludo por defecto
}

const App = () =>{
  return(
    <div>
       <Saludo name={Nombre} lastName={Apellido} saludo={saludo}/>
       <Contador/>
    </div>
  );
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
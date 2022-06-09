import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Counter';
import clickimg from "./imagenes/clickimg.png"
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='app-logo-contenedor'>
        <img 
        className='click-logo'
        src={clickimg}
        alt="logo contador" />
      </div>
      <div className='"contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

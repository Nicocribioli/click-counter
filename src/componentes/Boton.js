import React from "react";
import "../style-sheet/boton.css"

function Boton({ texto, esBotonDeClick, manejarClick }){
  return(
    <button
    className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
    onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Boton;
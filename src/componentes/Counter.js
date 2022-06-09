import React from "react";
import "../style-sheet/counter.css"


function Contador({ numClicks }){
  return(
    <div className="contador">
      {numClicks}
    </div>
  )
}

export default Contador;
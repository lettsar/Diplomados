

import { ajax } from "./ajax.js";
import { ConversionDivisas } from "./convertDv.js"


document.addEventListener("DOMContentLoaded",e=>{

  const d = document;
  const $cantidad = d.getElementById("monto")
  const $de = d.getElementById("de")
  const $a = d.getElementById("a")
  const $calcular = d.getElementById("calcular")  
  const $respuesta = d.getElementById("respuesta")  
  const $dtalleCambio = d.getElementById("dtalleCambio")  


d.addEventListener("click",e=>{

  if(e.target === $calcular){
    if (isNaN($cantidad.value)) {
     alert("Solo se Permiten Numeros")
     $cantidad.value=1
    }
 
    let props = {
      cantidad:$cantidad,
      de:$de,
      a:$a,
      dtalleCambio:$dtalleCambio,
      respuesta:$respuesta
      
    }
ConversionDivisas(props)
    
  }


  }) 
})
/* console.log("Aqui ira todo tu codigo...EXITOS !!!");

const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
  alert('Mensaje de prueba...');
}) */
import Curso from"./clases/Curso.js"
import Profesor from"./clases/profesor.js"
import Alumno from "./clases/alumno.js";

const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const target = e.target;
    const profesor = new Profesor("Alvaro"," Felipe","afelipe@ed.team",true,"HTML",10)
    const html = new Curso(target.nombre.value,target.poster.value,target.clases.value,profesor.nombre + profesor.apellido)
    console.log(html)
  
    html.MosratCursos();
    
})




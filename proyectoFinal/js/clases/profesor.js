import Usuarios from"./Usuario.js"
export default class Profesor extends Usuarios{
    //Constructor
constructor(nombre, apellido,correo,activo,cursosDistados, calificacion){
   super(nombre, apellido,correo,activo)
   this.cursosDistados = cursosDistados
   this.calificacion = calificacion
}
  //////////get/////////
  getProfesor(){return this.nombre}
  

}
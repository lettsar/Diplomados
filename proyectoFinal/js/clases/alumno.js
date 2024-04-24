import Usuarios from"./Usuario.js"

export default class Alumno extends Usuarios{
    //Constructor
constructor(nombres, apellidos,correo,activo,cursoTomado){
    super(nombres, apellidos,correo,activo)
   this.cursoTomado = cursoTomado
}
}
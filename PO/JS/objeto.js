///////////// Creando Clases////////
class Usuarios{
//Constructor
constructor(nombres, apellidos,correo,activo){
    this.nombre = nombres,
    this.apellido = apellidos,
    this.correo = correo,
    this.activo=activo
}
Presentarse(){
    return `Mi Nombre es ${this.nombre} ${this.apellido} y mi Correo es: ${this.correo} `;
}
}

class Alumno extends Usuarios{
    //Constructor
constructor(nombres, apellidos,correo,activo,cursoTomado){
    super(nombres, apellidos,correo,activo)
   this.cursoTomado = cursoTomado
}
}

class Profesor extends Usuarios{
    //Constructor
constructor(nombres, apellidos,correo,activo,cursosDistados, calificacion){
   super(nombres, apellidos,correo,activo)
   this.cursosDistados = cursosDistados
   this.calificacion = calificacion
}
}


const Alumno1 = new Alumno("Alfredo","Leonett","lettsar@gmail.com",true,["HTML","CSS","JS"]);
const profesor = new Profesor("Alfredo","Leonett","lettsar@gmail.com",true,["HTML","CSS"],10);
console.log(Alumno1)
console.log(profesor)
console.log(Alumno1.Presentarse())

///////////// Creando Clases////////
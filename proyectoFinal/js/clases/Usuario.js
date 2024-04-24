export default class Usuarios{
    //Constructor
    constructor(nombres, apellidos,correo,activo){
        this.nombre = nombres,
        this.apellido = apellidos,
        this.correo = correo,
        this.activo=activo
    }

    getNombre(){return this.nombres};
    getApellidos(){return this.apellidos};
    
    Presentarse(){
        return `Mi Nombre es ${this.nombre} ${this.apellido} y mi Correo es: ${this.correo} `;
    }
    }
    
  
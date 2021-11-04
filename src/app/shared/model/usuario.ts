export class Usuario{
    idUsuario: number;
    nombre: string;
    correo: string;
    constructor(nombre: string, correo: string){
        this.nombre = nombre;
        this.correo = correo;
    }
}

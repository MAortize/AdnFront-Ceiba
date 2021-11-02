export class Usuario{
    idUsuario: number;
    nombre: string;
    correo: string;
    tipoCarro:string;
    placa:string;

    constructor(idUsuario:number, nombre:string, correo:string, tipoCarro:string, placa:string){
        this.idUsuario=idUsuario;
        this.nombre=nombre;
        this.correo=correo;
        this.tipoCarro=tipoCarro;
        this.placa=placa
        
    }
}

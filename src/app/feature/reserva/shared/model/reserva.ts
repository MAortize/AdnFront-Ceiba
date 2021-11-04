export class Reserva{
    id: number;
    codigo: string;
    pelicula: string;
    fechaCreacion: string;
    horaCreacion: string;
    fechaReserva: string;
    horaReserva: string;
    noPuesto: number;
    tipoCarro: string;
    tarifa: number;
    idUsuarioReserva: number;
    constructor(codigo:string, pelicula:string,fechaReserva:string,horaReserva:string,idUsuario:number, tipoCarro:string){
      
        this.codigo=codigo;
        this.pelicula=pelicula
        this.fechaReserva=fechaReserva
        this.horaReserva=horaReserva;
        this.idUsuarioReserva=idUsuario;
        this.noPuesto=0;
        this.tipoCarro=tipoCarro;

    }

}
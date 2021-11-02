export class Reserva{
    id: number;
    codigo: string;
    pelicula: string;
    fechaCreacion: string;
    horaCreacion: string;
    fechaReserva: string;
    horaReserva: string;
    noPuesto: number;
    tarifa: number;
    constructor(id:number, codigo:string, pelicula:string, fechaCreacion:string, horaCreacion:string, 
                                fechaReserva:string,horaReserva:string,noPuesto:number, tarifa: number){
        this.id=id;
        this.codigo=codigo;
        this.pelicula=pelicula
        this.fechaCreacion=fechaCreacion;
        this.horaCreacion=horaCreacion;
        this.fechaReserva=fechaReserva
        this.horaReserva=horaReserva;
        this.noPuesto=noPuesto;
        this.tarifa=tarifa;

    }

}
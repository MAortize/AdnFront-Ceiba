import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';


const URL = environment.endpoint + '/reservas';

@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) { }

  
  public consultaReserva(){
    return this.http.doGet<Reserva[]>(`${URL}`, this.http.optsName('Listar Reservas'));
  }

  public crearReserva(reserva: Reserva){
    return this.http.doPost<Reserva, boolean>(`${URL}`, reserva);
  }
}

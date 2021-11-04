import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';


const URL = environment.endpoint + '/reservas'

@Injectable()
export class ReservaService {

  constructor(protected http: HttpService, private https: HttpClient) { }

  public consultaPelicula(){
      return this.https.get(`${environment.endpointPeliculas}`);
      
  }

  public consultaReserva(){
    return this.http.doGet<Reserva[]>(`${URL}`, this.http.optsName('Listar Reservas'))
  }

  public crearReserva(reserva: Reserva){
    return this.https.post(`${URL}`,reserva)
  }
}

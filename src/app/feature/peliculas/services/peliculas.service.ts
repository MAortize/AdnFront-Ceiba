import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Peliculas } from '../model/pelicula';

@Injectable()
export class PeliculasService {

  constructor(private http: HttpService) { }


  public consultaPelicula(){
    return this.http.doGet<Peliculas[]>(`${environment.endpointPeliculas}`).pipe(map(this.transformarData));
  }

  private transformarData(response: any){
    let peliculas: Peliculas[] = response['results'];
    return peliculas;
  }


}

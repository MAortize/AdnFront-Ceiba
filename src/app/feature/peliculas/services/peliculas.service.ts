import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ResponsePeliculas } from '@shared/model/responsePelicula';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Peliculas } from '../model/pelicula';

@Injectable()
export class PeliculasService {

  constructor(private http: HttpService) { }


  public consultaPelicula(){
    return this.http.doGet<ResponsePeliculas>(`${environment.endpointPeliculas}`).pipe(map(this.transformarData));
  }

  private transformarData(response: ResponsePeliculas){
    let peliculas: Peliculas[] = response.results;
    return peliculas;
  }


}

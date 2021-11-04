import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../../../shared/model/usuario';

const URL = environment.endpoint + '/usuarios'

@Injectable()
export class UsuarioService {

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Usuario[]>(`${URL}`, this.http.optsName('Listar Usuarios'));
  }

  public crear(usuario: Usuario){
    return this.http.doPost(`${URL}`,usuario)
  }


}
  
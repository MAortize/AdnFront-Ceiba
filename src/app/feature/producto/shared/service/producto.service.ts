import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';

const URL = environment.endpoint + '/reserva'


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${URL}`, producto,
                                                this.http.optsName('Crear Reserva'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
                                                 this.http.optsName('eliminar productos'));
  }
}

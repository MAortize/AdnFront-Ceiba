import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

import { ReservaService } from './reserva.service';

describe('ReservaService', () => {
  let httpMock: HttpTestingController;
  let service: ReservaService;
  const URL = environment.endpoint + '/reservas';

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      providers: [
      ReservaService, HttpService
    ],
  imports: [HttpClientTestingModule]});
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    const reservaService: ReservaService = TestBed.inject(ReservaService);
    expect(reservaService).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const dummyReserva = [
      new Reserva('ABC', 'Pelicula1', '2021-11-11', '12:00:00', 1, 'AUTOMOVIL')
    ];
    service.consultaReserva().subscribe(reservas => {
      expect(reservas.length).toBe(1);
      expect(reservas).toEqual(dummyReserva);
    });
    const req = httpMock.expectOne(URL);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReserva);
  });

  it('deberia crear reserva', () => {
    const dummyReserva = new Reserva('ABC', 'Pelicula1', '2021-11-11', '12:00:00', 1, 'AUTOMOVIL');
    service.crearReserva(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(URL);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Peliculas } from '../model/pelicula';

import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  let httpMock: HttpTestingController;
  let service: PeliculasService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PeliculasService, HttpService]
  });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PeliculasService);
  });

  it('should be created', () => {
    const peliculaService: PeliculasService = TestBed.inject(PeliculasService);
    expect(peliculaService).toBeTruthy();
  });

it('deberia listar peliculas', () => {
  const dummyPeliculas = [
    new Peliculas('prueba1', 'descripcion xd', 'asdas')
  ];
  service.consultaPelicula().subscribe(peliculas => {
    expect(peliculas.length).toBe(1);
    expect(peliculas).toEqual(dummyPeliculas);
  });
  const req = httpMock.expectOne(environment.endpointPeliculas);
  expect(req.request.method).toBe('GET');
  req.flush(dummyPeliculas)
});

});

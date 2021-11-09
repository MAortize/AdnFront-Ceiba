import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Usuario } from '@shared/model/usuario';
import { environment } from 'src/environments/environment';


import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let httpMock: HttpTestingController;
  let service: UsuarioService;
  const URL = environment.endpoint + '/usuarios';

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      providers: [
      UsuarioService, HttpService
    ],
  imports: [
    HttpClientTestingModule
  ]});
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    const usuarioService: UsuarioService = TestBed.inject(UsuarioService);
    expect(usuarioService).toBeTruthy();
  });

  it('deberia listar usuarios', () => {
    const dummyUsuario = [
      new Usuario('miguel', 'ortiz.eche@gmail.com')
    ];
    service.consultar().subscribe(usuarios => {
      expect(usuarios.length).toBe(1);
      expect(usuarios).toEqual(dummyUsuario);
    });
    const req = httpMock.expectOne(URL);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsuario);
  });


  it('deberia crear usuarios', () => {
    const dummyUsuario = new Usuario('miguel', 'ortiz.eche@gmail.com');
    service.crear(dummyUsuario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(URL);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});

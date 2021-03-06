import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs/internal/observable/of';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PeliculasService } from 'src/app/feature/peliculas/services/peliculas.service';


import { CrearReservaComponent } from './crear-reserva.component';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  let usuarioService: UsuarioService;
  const detalleReserva = new Reserva('aa', 'peliPrueba', '2021-11-04', '11:37:00', 1, 'CAMIONETA');
  const listUsuaios: Usuario[] = [
    new Usuario('Miguel', 'ortiz.eche@gmail.com'),
    new Usuario('Alejandro', 'xd.eche@gmail.com')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [ReservaService, HttpService, UsuarioService, PeliculasService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'crearReserva').and.returnValue(
      of(true)
    );
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'consultar').and.returnValue(
      of(listUsuaios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Comprobar que el titulo sea 'Recuerda ingresar todos los datos para poder crear la reserva ^-^'`, () => {
    expect(component.titulo).toEqual('Recuerda ingresar todos los datos para poder crear la reserva ^-^');
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formaReserva.valid).toBeFalsy();
  });

  it('Crear reserva', () => {
    component.formaReserva.controls.tipoCarro.setValue(detalleReserva.tipoCarro);
    component.formaReserva.controls.fechaReserva.setValue(detalleReserva.fechaReserva);
    component.formaReserva.controls.horaReserva.setValue(detalleReserva.horaReserva);
    component.formaReserva.controls.nombreUsuario.setValue(detalleReserva.idUsuarioReserva);
    expect(component.formaReserva.valid).toBeTruthy();
    component.agregar();

    expect(component.notificacion).toBeTruthy();
  });
});

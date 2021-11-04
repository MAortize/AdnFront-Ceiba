import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
//import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CrearReservaComponent } from './crear-reserva.component';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  //let reservaService: ReservaService;
  //const detalleReserva = new Reserva('aa','peliPrueba','2021-11-04','11:37:00',1,'CAMIONETA');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    //reservaService = TestBed.inject(ReservaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Comprobar que el titulo sea 'Recuerda ingresar todos los datos para poder crear la reserva ^-^'`, () => {
    expect(component.titulo).toEqual('Recuerda ingresar todos los datos para poder crear la reserva ^-^');
  })

  it('Invalidar el formulario si esta vacio', () => {
    expect(component.formaReserva.valid).toBeFalsy();
  })
});

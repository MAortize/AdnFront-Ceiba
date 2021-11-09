import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { of } from 'rxjs';

import { ListarReservasComponent } from './listar-reservas.component';

describe('ListarReservasComponent', () => {
  let component: ListarReservasComponent;
  let fixture: ComponentFixture<ListarReservasComponent>;
  let reservaService: ReservaService;
  const listReservas: Reserva[] = [
    new Reserva('aa', 'peliPrueba', '2021-11-04', '11:37:00', 1, 'CAMIONETA'),
    new Reserva('aa', 'peliPrueba', '2021-11-04', '11:37:00', 2, 'AUTOMOVIL')
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservasComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservasComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'consultaReserva').and.returnValue(
      of(listReservas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaReserva.subscribe(resultado => {
      expect(2).toBe(resultado.length)
    })
  });
});

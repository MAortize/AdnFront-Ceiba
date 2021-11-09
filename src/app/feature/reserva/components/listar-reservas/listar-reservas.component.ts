import { Component, OnInit } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styles: [
  ]
})
export class ListarReservasComponent implements OnInit {
  public listaReserva: Observable<Reserva[]>;

  constructor(protected reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listaReserva = this.reservaService.consultaReserva();
  }


}

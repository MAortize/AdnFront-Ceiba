import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: [
  ]
})
export class ReservaComponent implements OnInit {
  titulo = 'Para crear una reserva da click en el poster de la pelicula que quieras ^-^';
  constructor(protected reservaService: ReservaService) { }

  ngOnInit(): void {
  }
}

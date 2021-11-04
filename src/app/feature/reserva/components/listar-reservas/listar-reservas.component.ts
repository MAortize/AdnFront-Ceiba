import { Component, OnInit } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styles: [
  ]
})
export class ListarReservasComponent implements OnInit {
  public listaReserva: Reserva[]=[];

  constructor(protected reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReserva()
  }

  listarReserva(){
    this.reservaService.consultaReserva().subscribe(data => {
      console.log(data);
      this.listaReserva=data;
    })
  }

}

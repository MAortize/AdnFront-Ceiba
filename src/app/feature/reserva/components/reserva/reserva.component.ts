import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: [
  ]
})
export class ReservaComponent implements OnInit {

  public peliculas: [] = [];
  titulo = 'Para crear una reserva da click en el poster de la pelicula que quieras ^-^';

  constructor(protected reservaService: ReservaService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarPeliculas();
  }


  mostrarPeliculas(){
    this.reservaService.consultaPelicula().subscribe((data: any) => {
      this.peliculas = data.results;
    });
  }


  crearReserva(item: any){
    let nombrePelicula;
    nombrePelicula = item.title;
    this.router.navigate(['reserva/crearReserva', nombrePelicula]);
  }
}

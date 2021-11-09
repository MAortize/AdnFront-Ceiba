import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Peliculas } from './model/pelicula';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [
  ]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Observable<Peliculas[]>;

  constructor(protected peliculaService: PeliculasService, private router: Router) { }

  ngOnInit(): void {
    this.peliculas=this.peliculaService.consultaPelicula();
  }

  
  crearReserva(item: Peliculas){
    let nombrePelicula;
    nombrePelicula = item.title;
    this.router.navigate(['reserva/crearReserva', nombrePelicula]);
  }


}

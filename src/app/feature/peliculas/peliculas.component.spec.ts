import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Peliculas } from './model/pelicula';

import { PeliculasComponent } from './peliculas.component';
import { PeliculasService } from './services/peliculas.service';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;
  let peliculaService: PeliculasService;
  const listaPeliculas: Peliculas[] = [new Peliculas('prueba1', 'descripcion xd', 'asdas')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasComponent ],
      providers: [PeliculasService, HttpService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    peliculaService = TestBed.inject(PeliculasService);
    spyOn(peliculaService, 'consultaPelicula').and.returnValue(
      of(listaPeliculas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.peliculas.subscribe(resultado => {
      expect(1).toBe(resultado.length);
    });
  });
});

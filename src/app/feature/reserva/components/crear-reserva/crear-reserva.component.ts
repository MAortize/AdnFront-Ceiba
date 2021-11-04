import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { Usuario } from '@shared/model/usuario';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styles: [
  ]
})
export class CrearReservaComponent implements OnInit {

  nombrePelicula: string;
  codigoReserva: string;
  listaUsuarios: Usuario[] = [];
  formaReserva: FormGroup;
  titulo = 'Recuerda ingresar todos los datos para poder crear la reserva ^-^';

  constructor(private router: ActivatedRoute, protected servicioUsuario: UsuarioService,
  protected servicioReserva: ReservaService, private fb: FormBuilder, private route: Router) { this.crearFormReactiveReserva(); }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.nombrePelicula = params['nombre'];
      this.generarAleatorio();
    });
    this.obtenerTodosLosUsuarios();
  }

  get tipoCarroNoValido(){
    return this.formaReserva.get('tipoCarro').invalid && this.formaReserva.get('tipoCarro').touched;
  }

  get fechaReservaNoValido(){
    return this.formaReserva.get('fechaReserva').invalid && this.formaReserva.get('fechaReserva').touched;
  }

  get horaReservaNoValido(){
    return this.formaReserva.get('horaReserva').invalid && this.formaReserva.get('horaReserva').touched;
  }

  get nombreUsuarioNoValido(){
    return this.formaReserva.get('nombreUsuario').invalid && this.formaReserva.get('nombreUsuario').touched;
  }


  obtenerTodosLosUsuarios(){
    this.servicioUsuario.consultar().subscribe(data => {
      this.listaUsuarios = data;
    });
  }

  crearFormReactiveReserva(){
    this.formaReserva = this.fb.group({
      tipoCarro: ['', Validators.required],
      fechaReserva: ['', Validators.required],
      horaReserva: ['', Validators.required],
      nombreUsuario: ['', Validators.required]
    });
  }

  agregar(){
    if (this.formaReserva.invalid) {
      return  Object.values(this.formaReserva.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    this.servicioReserva.crearReserva(new Reserva(this.codigoReserva, this.nombrePelicula, this.formaReserva.value.fechaReserva,
    this.formaReserva.value.horaReserva, this.formaReserva.value.nombreUsuario, this.formaReserva.value.tipoCarro)).subscribe(data => {
        Swal.fire({
          title: 'Se creo la reserva con el id',
          text: data['valor'].toString(),
          icon: 'success'
        });
        this.generarAleatorio();
    }, e => {
        Swal.fire({title: e.error.mensaje,
          text: '',
          icon: 'error'});
    });
    this.formaReserva.reset();
  }

  generarAleatorio(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const parada = 6;
    this.codigoReserva = '';
    for (let i = 0; i < parada; i++) {
      this.codigoReserva += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  volver(){
    this.route.navigate(['reserva']);
  }
}

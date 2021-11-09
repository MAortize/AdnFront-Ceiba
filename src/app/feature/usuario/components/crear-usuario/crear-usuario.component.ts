import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styles: [
  ]
})
export class CrearUsuarioComponent implements OnInit {

  nombreUsuario: string;
  correoElectronico: string;
  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });
  forma: FormGroup;

  constructor(protected servicioUsuario: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void { this.crearFormReactive(); }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }


  crear(){
    this.servicioUsuario.crear((this.forma.value)).subscribe(data => {
      if (data) {
        this.success()  
      }
      
    });
    this.forma.reset();
  }


  crearFormReactive(){
    this.forma = this.fb.group({
      nombre: ['', Validators.required ],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ]
    });
  }

  success(){
    let enPantalla = false;
    this.notificacion.fire({
      title: 'Se ha creado el usuario',
      text: '^-^',
      icon: 'success'
    });
    if (this.notificacion.isVisible()) {
      console.log('si sirvio el perro');
      enPantalla = true;
    }else{
      console.log('No sirvio el hp');
    }
    return enPantalla;
  }
}

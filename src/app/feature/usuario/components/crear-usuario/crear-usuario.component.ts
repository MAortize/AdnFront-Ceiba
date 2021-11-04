import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styles: [
  ]
})
export class CrearUsuarioComponent implements OnInit {

  nombreUsuario:any;
  correoElectronico:any;

  forma : FormGroup

  constructor(protected servicioUsuario: UsuarioService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.crearFormReactive()
    
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }


  crear(){
    
    console.log(this.forma);

    if (this.forma.invalid) {
      return  Object.values(this.forma.controls).forEach(control => {
        control.markAsTouched();
      })

      
    }

    this.servicioUsuario.crear(new Usuario(this.forma.value.nombre,this.forma.value.correo)).subscribe(data => {
      console.log(data);
      this.nombreUsuario=null;
      this.correoElectronico=null;
      swal("El id del usuario es ",data['valor'].toString())

    })

    this.forma.reset();
    
    // console.log(this.nombreUsuario);
    // console.log(this.correoElectronico);
  }


  crearFormReactive(){

    this.forma= this.fb.group({
      nombre:['', Validators.required ],
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ]

    });

  }

}

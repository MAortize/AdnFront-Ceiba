import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styles: [
  ]
})
export class CrearReservaComponent implements OnInit {

  nombrePelicula: any;
  codigoReserva: string='';
  listaUsuarios: Usuario[]=[]
  formaReserva: FormGroup
  


  constructor(private router: ActivatedRoute, protected servicioUsuario: UsuarioService, 
    protected servicioReserva: ReservaService, private fb: FormBuilder) { 
    this.crearFormReactiveReserva()
  }

  ngOnInit(): void {  
    this.router.params.subscribe(params => {
      console.log(params['nombre']);
      this.nombrePelicula=params['nombre']
      this.generarAleatorio()
    })
    
    this.obtenerTodosLosUsuarios()
  }

  get tipoCarroNoValido(){
    return this.formaReserva.get('tipoCarro').invalid && this.formaReserva.get('tipoCarro').touched
  }

  get fechaReservaNoValido(){
    return this.formaReserva.get('fechaReserva').invalid && this.formaReserva.get('fechaReserva').touched
  }

  get horaReservaNoValido(){
    return this.formaReserva.get('horaReserva').invalid && this.formaReserva.get('horaReserva').touched
  }

  get nombreUsuarioNoValido(){
    return this.formaReserva.get('nombreUsuario').invalid && this.formaReserva.get('nombreUsuario').touched
  }


  obtenerTodosLosUsuarios(){
    this.servicioUsuario.consultar().subscribe(data => {
      this.listaUsuarios=data
    })
  }

  crearFormReactiveReserva(){

    

    this.formaReserva= this.fb.group({
      tipoCarro: ['', Validators.required],
      fechaReserva: ['', Validators.required],
      horaReserva: ['', Validators.required],
      nombreUsuario: ['', Validators.required]
    })

  }

  agregar(){
    console.log(this.formaReserva);
    
    if (this.formaReserva.invalid) {
      return  Object.values(this.formaReserva.controls).forEach(control => {
        control.markAsTouched();
      })  
    }

    this.servicioReserva.crearReserva(new Reserva(this.codigoReserva,this.nombrePelicula,this.formaReserva.value.fechaReserva,
                                      this.formaReserva.value.horaReserva,this.formaReserva.value.nombreUsuario,this.formaReserva.value.tipoCarro)).subscribe(data=> {
        console.log(data);
        Swal.fire({
          title: 'Se creo la reserva con el id',
          text: data['valor'].toString(),
          icon: 'success'
        })
        //("Se creo la reserva satisfactoriamente con el id",data['valor'].toString(),"success");
        this.generarAleatorio()
    }, e => {
        Swal.fire({title: e.error.mensaje,
          text: '',
          icon: "error"});
    })

    this.formaReserva.reset();
    
    
    
  
  }

  generarAleatorio(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.codigoReserva='';
    for (let i = 0; i < 6; i++) {
        this.codigoReserva += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styles: [
  ]
})
export class ListarUsuarioComponent implements OnInit {

  public listaUsuarios: Observable<Usuario[]>;

  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listaUsuarios = this.usuarioService.consultar();
  }

  
}


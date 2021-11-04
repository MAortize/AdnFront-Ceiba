import { Component, OnInit } from '@angular/core';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styles: [
  ]
})
export class ListarUsuarioComponent implements OnInit {

  public listaUsuarios: Usuario[] = [];

  constructor(protected usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.consultar().subscribe(data => {
      this.listaUsuarios = data;
    });
  }
}


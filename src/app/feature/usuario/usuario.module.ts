import { NgModule } from '@angular/core';


import { UsuarioRoutingModule } from './usuario-routing.module';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BorrarUsuarioComponent } from './components/borrar-usuario/borrar-usuario.component';
import { SharedModule } from '@shared/shared.module';
import { UsuarioService } from './shared/service/usuario.service';
import { LayoutUsuarioComponent } from './components/layout-usuario/layout-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    BorrarUsuarioComponent,
    UsuarioComponent,
    LayoutUsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }

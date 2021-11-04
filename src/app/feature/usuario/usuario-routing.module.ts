import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LayoutUsuarioComponent } from './components/layout-usuario/layout-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutUsuarioComponent,
    children: [
      { path: '',component: UsuarioComponent},
      {path:'crear',component: CrearUsuarioComponent},
      {path:'listar',component: ListarUsuarioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }


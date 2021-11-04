import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { LayoutReservaComponent } from './components/layout-reserva/layout-reserva.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [{
  path: '',
  component: LayoutReservaComponent,
  children: [
    { path: '', component: ReservaComponent},
    { path: 'crearReserva/:nombre', component: CrearReservaComponent},
    { path: 'listar', component: ListarReservasComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }

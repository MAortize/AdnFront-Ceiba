import { NgModule } from '@angular/core';


import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './components/reserva/reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { SharedModule } from '@shared/shared.module';
import { ReservaService } from './shared/service/reserva.service';
import { LayoutReservaComponent } from './components/layout-reserva/layout-reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservaComponent,
    CrearReservaComponent,
    ListarReservasComponent,
    LayoutReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ReservaService]
})
export class ReservaModule { }

import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/usuario', nombre: 'usuario' },
    { url: '/reserva', nombre: 'reserva' }
  ];
}

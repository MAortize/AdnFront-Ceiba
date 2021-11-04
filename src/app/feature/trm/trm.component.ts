import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Trm } from './model/trm';
import { TrmService } from './services/trm.service';

@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styles: [
  ]
})
export class TrmComponent implements OnInit {

  constructor(protected trmService: TrmService, private datePipe: DatePipe) { }

  public trmActual: Observable<Trm[]>;

  ngOnInit(): void {
    this.obtenerTrmActualColombia()
  }

  obtenerTrmActualColombia() {
    const fechaTransformada = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.trmActual = this.trmService.consultar(fechaTransformada);
  }

}

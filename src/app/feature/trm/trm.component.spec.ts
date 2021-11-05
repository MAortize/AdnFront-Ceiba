import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs/internal/observable/of';
import { TrmService } from './services/trm.service';

import { TrmComponent } from './trm.component';

describe('TrmComponent', () => {
  let component: TrmComponent;
  let fixture: ComponentFixture<TrmComponent>;
  let trmService: TrmService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrmComponent ],
      imports : [ HttpClientModule, CommonModule, RouterTestingModule],
      providers: [TrmService, HttpService, DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrmComponent);
    component = fixture.componentInstance;
    trmService = TestBed.inject(TrmService);
    spyOn(trmService, 'consultar').and.returnValue(
      of(null)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutReservaComponent } from './layout-reserva.component';

describe('LayoutReservaComponent', () => {
  let component: LayoutReservaComponent;
  let fixture: ComponentFixture<LayoutReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

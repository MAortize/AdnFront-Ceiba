import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUsuarioComponent } from './layout-usuario.component';

describe('LayoutUsuarioComponent', () => {
  let component: LayoutUsuarioComponent;
  let fixture: ComponentFixture<LayoutUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

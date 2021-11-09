import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { of } from 'rxjs';

import { CrearUsuarioComponent } from './crear-usuario.component';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let usuarioService: UsuarioService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioComponent ],
      imports: [HttpClientTestingModule],
      providers: [UsuarioService, HttpService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'crear').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.forma.valid).toBeFalsy();
  });



  it('Registrando usuario', () => {
    expect(component.forma.valid).toBeFalsy();
    component.forma.controls.nombre.setValue('miguel');
    component.forma.controls.correo.setValue('miguel@gmail.com');
    expect(component.forma.valid).toBeTruthy();

    component.crear()
    
    //Validamos el resultado deseado(En este caso que el swal se ejecute)
    expect(component.notificacion).toBeTruthy();

  })

});

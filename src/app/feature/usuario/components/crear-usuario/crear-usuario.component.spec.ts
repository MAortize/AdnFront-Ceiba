import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { Usuario } from '@shared/model/usuario';
import { UsuarioService } from '@usuario/shared/service/usuario.service';

import { CrearUsuarioComponent } from './crear-usuario.component';

describe('CrearUsuarioComponent', () => {
  let component: CrearUsuarioComponent;
  let fixture: ComponentFixture<CrearUsuarioComponent>;
  let usuarioService: UsuarioService;
  const detalleUsuario = new Usuario('miguel', 'ortiz.eche@gmail.com');

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Crear usuario', () =>{
    component.forma.controls.nombre.setValue(detalleUsuario.nombre);
    component.forma.controls.correo.setValue(detalleUsuario.correo);
    expect(component.forma.valid).toBeTruthy();
    const spy = spyOn(usuarioService, 'crear').and.callThrough();
    component.crear()
    expect(spy).toHaveBeenCalled();
  })
});

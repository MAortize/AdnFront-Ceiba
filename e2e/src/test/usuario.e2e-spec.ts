import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { UsuarioPage } from '../page/usuario/usuario.po';



describe('workspace-project Usuario', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let usuario: UsuarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        usuario = new UsuarioPage();
    });

    it('Deberia crear un usuario', () => {
        const NOMBRE_USUARIO = 'Miguel';
        const CORREO = 'ortiz.eche@gmail.com';
        page.navigateTo();
        navBar.clickBotonUsuarios();
        usuario.clickBotonCrearUsuario();
        usuario.ingresarNombre(NOMBRE_USUARIO);
        usuario.ingresarCorreo(CORREO);

        //Expect- Se espera el titulo del popup swal
        expect(usuario.confirmarNoti()).toEqual('Se ha creado el usuario');
    });
});

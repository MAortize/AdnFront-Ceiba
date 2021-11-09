import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ReservaPage } from '../page/reserva/reserva.po';


describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

    it('deberia crear una reserva', () => {
        const PELICULA = 'prueba';
        const CODIGO = 'abds';
        const TIPO_CARRO = 'AUTOMOVIL';
        const FECHA_RESERVA = '2021-11-10';
        const HORA_RESERVA = '12:00:00';
        const NOMBRE_USUARIO = 'miguel';

        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickBotonCrearReserva();
        reserva.ingresarPelicula(PELICULA);
        reserva.ingresarCodigo(CODIGO);
        reserva.ingresarTipoCarro(TIPO_CARRO);
        reserva.ingresarFechaReserva(FECHA_RESERVA);
        reserva.ingresarHoraReserva(HORA_RESERVA);
        reserva.ingresarIdUsuario(NOMBRE_USUARIO);
        
        //Expect- Se espera el titulo del popup swal
        expect(reserva.confirmarNoti()).toEqual('Se ha creado la reserva');
    })

    it('Deberia listar reservas', () => {
        page.navigateTo();
        navBar.clickBotonReservas();
        reserva.clickBotonListarReserva();

        expect(32).toBe(reserva.contarReservas());
    })
})
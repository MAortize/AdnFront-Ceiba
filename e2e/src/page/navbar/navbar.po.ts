import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonUsuarios() {
        await this.linkUsuario.click();
    }

    async clickBotonReservas(){
        await this.linkReserva.click();
    }
}

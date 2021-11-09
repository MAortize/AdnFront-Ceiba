import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.id('linkCrearUsuario'));
    private linkListarUsuario = element(by.id('linkListarUsuario'));
    private inputNombreUsuario = element(by.id('nombreUsuario'));
    private inputCorreo = element(by.id('correoElectronico'));
    private btnCrear = element(by.id('btnCrear'));
    private listarUsuarios = element(by.css('.list-group-item.list-group-item-action.list-group-item-success'));



    async clickBotonCrearUsuario() {
        await this.linkCrearUsuario.click();
    }

    async clickBotonListarUsuario() {
        await this.linkListarUsuario.click();
    }

    async ingresarNombre(nombreUsuario) {
        await this.inputNombreUsuario.sendKeys(nombreUsuario);
    }

    async ingresarCorreo(correo) {
        await this.inputCorreo.sendKeys(correo);
    }

    async confirmarCrear(){
        await this.btnCrear.click();
    }

    async contarUsuarios() {
        return this.listarUsuarios.count();
    }

    async confirmarNoti(){
        return element(by.css('.swal2-popup.swal2-toast .swal2-title')).getText();
    }
}

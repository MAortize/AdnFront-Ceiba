import { by, element } from 'protractor';

export class UsuarioPage {
    private linkCrearUsuario = element(by.id('linkCrearUsuario'));
    private linkListarUsuario = element(by.id('linkListarUsuario'));
    private inputNombreUsuario = element(by.id('nombreUsuario'));
    private inputCorreo = element(by.id('correoElectronico'));
    private listarUsuarios = element.all(by.css('app-listar-usuarios li'));



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

    async contarUsuarios() {
        return this.listarUsuarios.count();
    }
}

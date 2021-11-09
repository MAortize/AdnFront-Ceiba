import { by, element } from 'protractor';

export class ReservaPage {
    private linkCrearReserva = element(by.id('crearReserva'));
    private linkListarReserva = element(by.id('linkListarReserva'));
    private inputNombrePelicula = element(by.id('pelicula'));
    private inputCodigo = element(by.id('codigo'));
    private inputTipoCarro = element(by.id('tipoCarro'));
    private inputFechaReserva = element(by.id('fechaReserva'));
    private inputHoraReserva = element(by.id('horaReserva'));
    private inputIdUsuario = element(by.id('idUsuario'));
    private listarReservas = element(by.css('.list-group-item.list-group-item-action.list-group-item-success'));
    
    async clickBotonCrearReserva() {
        await this.linkCrearReserva.click();
    }

    async clickBotonListarReserva() {
        await this.linkListarReserva.click();
    }

    async ingresarPelicula(pelicula) {
        await this.inputNombrePelicula.sendKeys(pelicula);
    }

    async ingresarCodigo(codigo) {
        await this.inputCodigo.sendKeys(codigo);
    }
    async ingresarTipoCarro(tipoCarro) {
        await this.inputTipoCarro.sendKeys(tipoCarro);
    }

    async ingresarFechaReserva(fechaReserva) {
        await this.inputFechaReserva.sendKeys(fechaReserva);
    }

    async ingresarHoraReserva(horaReserva) {
        await this.inputHoraReserva.sendKeys(horaReserva);
    }

    async ingresarIdUsuario(idUsuario) {
        await this.inputIdUsuario.sendKeys(idUsuario);
    }

    async contarReservas() {
        return this.listarReservas.count();
    }

    async confirmarNoti() {
        return element(by.css('.swal2-popup.swal2-toast .swal2-title')).getText();
    }


}
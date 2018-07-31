'use strict';

export class AppConstants {
    static configure() {
        angular
            .module('MUDAR.NOME.DO.MODULO')
            .constant('API_URL', API_URL)
            .constant('AUTHORIZATION', AUTHORIZATION)
            .constant('COMPANY_CODE', '@todo(COLOCAR O CODIGO DA OPERADORA AQUI, QUANDO NECESSARIO)')
            .constant('ORIGIN_CODE', '@todo(COLOCAR O CODIGO ORIGEM AQUI, QUANDO NECESSARIO)')
            .constant('USER_SELLER', '@todo(ADICIONE O VENDEDOR AQUI, FAVOR NAO ESQUECER)');
    }
}

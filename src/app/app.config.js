'use strict';

export class AppConfig {
    static configure() {
        angular
            .module('MUDAR.NOME.DO.MODULO')
            .config(($locationProvider, usSpinnerConfigProvider) => {
                $locationProvider.html5Mode(true);
                usSpinnerConfigProvider.setDefaults({
                    lines: 11,
                    length: 30,
                    width: 10,
                    radius: 30,
                    color: '#255178',
                    position: 'fixed'
                });
            });
    }
}

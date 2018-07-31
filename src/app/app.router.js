'use strict';

/* @ngInject */
export class AppRouter {
    static configure() {
        angular
            .module('MUDAR.NOME.DO.MODULO')
            .config(($urlRouterProvider) => {
                $urlRouterProvider.otherwise('/');
            });
    }
}

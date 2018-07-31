'use strict';

export class AppAnalytics {
    static configure() {
        angular
            .module('MUDAR.NOME.DO.MODULO')
            .config(($analyticsProvider) => {
                $analyticsProvider.firstPageview(true);
                $analyticsProvider.withAutoBase(true);
                $analyticsProvider.settings.ga = {
                    userId: '@todo(COLOCAR O ID DO GTM AQUI)'
                };
            });
    }
}

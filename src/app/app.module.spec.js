'use strict';

var application = {
    initModule: () => {
        beforeEach(() => {
            angular.mock.module('MUDAR.NOME.DO.MODULO', ($provide) => {
                $provide.constant('API_URL', '//esb.webapidev.cd.com/v1/api/');
                $provide.constant('AUTHORIZATION', '9ec365a9a6664414ac8927b1bda4744c');
            });

            angular.mock.module('MUDAR.NOME.DO.MODULO.components');
            angular.mock.module('MUDAR.NOME.DO.MODULO.pages');
        });
    }
};

describe('Module: Core application', () => {
    var dependencies = [];

    const hasModule = (module) => dependencies.indexOf(module) >= 0;

    application.initModule();

    it('Defined Core Module', () => {
        expect(hasModule('MUDAR.NOME.DO.MODULO')).toBeDefined();
    });
    
    it('Defined Components', () => {
        expect(hasModule('MUDAR.NOME.DO.MODULO.components')).toBeDefined();
    });

    it('Defined Pages', () => {
        expect(hasModule('MUDAR.NOME.DO.MODULO.pages')).toBeDefined();
    });
});

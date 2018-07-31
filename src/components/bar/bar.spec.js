'use strict';

import { ComponentBarModule } from './bar.module';

describe('Component: Bar', () => {
    var component,
        controller,
        scope;

    function compileComponent(template, bindings) {
        return inject(($rootScope, $compile) => {
            scope = $rootScope.$new();
            
            if (bindings) {
                scope = Object.assign(scope, bindings);
            }
                
            component = angular.element(`${ template }`);
            document.body.appendChild(component[0]);
            
            $compile(component)(scope);
            scope.$apply();
            controller = component.children().controller('bar');
        });
    };

    beforeEach(angular.mock.module(ComponentBarModule));

    beforeEach(() => {
        let tag = '<bar></bar>',
            bindings = {};

        compileComponent(tag, bindings);
    });

    afterEach(() => {
        document.body.removeChild(component[0]);

        component = null;
        controller = null;
        scope = null;
    });

    it('Deve estar definido', () => {
        expect(component).toBeDefined();
        expect(controller).toBeDefined();
    });
});

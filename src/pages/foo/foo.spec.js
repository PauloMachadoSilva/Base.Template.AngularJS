'use strict';

import { AppModule } from '../../app/app.module';
import { PageFooModule } from './foo.module';

describe('Page: Foo', () => {
    var component,
        controller,
        lazyLoad,
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
            controller = component.controller('foo');
        });
    };

    beforeEach(angular.mock.module(AppModule));
    beforeEach(angular.mock.module(PageFooModule));

    beforeEach((done) => {
        inject(($ocLazyLoad, $rootScope, $interval) => {
            lazyLoad = $ocLazyLoad;

            lazyLoad
                .load({
                    name: 'foo.page'
                })
                .then(() => {
                    done();
                })
                .catch((error) => {
                    console.error(error);
                });

            $interval(() => {
                $rootScope.$digest();
            }, 10);
        });

        let tag = '<foo></foo>',
            bindings = {};

        compileComponent(tag, bindings);
    });

    afterEach(() => {
        document.body.removeChild(component[0]);

        component = null;
        controller = null;
        scope = null;
    });

    it('Componente e controller definidos', () => {
        expect(controller).toBeDefined();
        expect(component).toBeDefined();
    });

    it('getModules funciona corretamente', () => {
        expect(lazyLoad.getModules).toBeDefined();
        expect(angular.isArray(lazyLoad.getModules())).toBe(true);
    });
});

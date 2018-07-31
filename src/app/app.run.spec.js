'use strict';

import { AppModule } from './app.module';

describe('App: Run', () => {
    var $http,
        $httpBackend,
        $rootScope,
        $state,
        usSpinnerService;

    beforeEach(() => {
        angular.mock.module(AppModule, ($stateProvider) => {
            $stateProvider.state('home', { url: '/home' });
        });

        inject(($injector) => {
            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            $rootScope = $injector.get('$rootScope');
            usSpinnerService = $injector.get('usSpinnerService');
            $state = $injector.get('$state');
        });
    });

    it('Modules definidos', () => {
        expect($http).toBeDefined();
        expect($httpBackend).toBeDefined();
        expect($rootScope).toBeDefined();
        expect($state).toBeDefined();
        expect(usSpinnerService).toBeDefined();
    });

    it('Troca de state', () => {
        $state.go('home');
        $rootScope.$digest();

        expect($state.current.name).toEqual('home');
    });

    describe('Spinner', () => {
        let tagSpinner;
        const request = () => {
            let value = null;
            usSpinnerService.spin('spinner-content');

            $http
                .get('https://private-72a48-net6.apiary-mock.com/testBase')
                .then((res) => { value = res; })
                .catch((err) => { value = 'error'; })
                .finally(() => usSpinnerService.stop('spinner-content'));

            $httpBackend.flush();

            return value;
        };

        beforeEach(() => {
            tagSpinner = angular.element('<div id="spinner-content" us-spinner spinner-key="spinner-content"></div>');
            document.body.appendChild(tagSpinner[0]);

            spyOn($http, 'get').and.callThrough();
        });

        afterEach(() => {
            document.body.removeChild(tagSpinner[0]);
        });

        it('Spinner start', () => {
            $rootScope.$broadcast('us-spinner:spin', (event, 'spinner-content'));
            const classes = document.querySelector('#spinner-content').classList.contains('container-spinner');

            expect(classes).toBeTruthy();
        });
    
        it('Spinner stop', () => {
            $rootScope.$broadcast('us-spinner:stop', (event, 'spinner-content'));
            const classes = document.querySelector('#spinner-content').classList.contains('container-spinner');

            expect(classes).toBeFalsy();
        });

        it('Chamada com 1 Request Http', () => {
            const code = {
                'valid': true
            };
    
            $httpBackend
                .when('GET', 'https://private-72a48-net6.apiary-mock.com/testBase')
                .respond(code);
    
            const responseRequest = request();
            expect(responseRequest.data).toEqual(code);
        });

        it('Chamada com + de 1 Request Http', () => {
            const code = {
                'valid': true
            };
    
            $httpBackend
                .when('GET', 'https://private-72a48-net6.apiary-mock.com/testBase')
                .respond(code);
    
            usSpinnerService.spin('spinner-content');
            const responseRequest = request();
            expect(responseRequest.data).toEqual(code);
        });
    });
});

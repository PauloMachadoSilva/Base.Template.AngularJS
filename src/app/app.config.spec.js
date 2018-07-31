'use strict';

import { AppModule } from './app.module';

describe('App: Config', () => {
    var $locationProvider,
        usSpinnerConfigProvider;

    beforeEach(() => {
        angular.mock.module(AppModule);

        angular.mock.module((_$locationProvider_, _usSpinnerConfigProvider_) => {
            $locationProvider = _$locationProvider_;
            usSpinnerConfigProvider = _usSpinnerConfigProvider_;
        });

        inject();
    });

    it('Defined', () => {
        expect($locationProvider.html5Mode()).toBeTruthy();
        expect(usSpinnerConfigProvider).toBeDefined();
    });
});

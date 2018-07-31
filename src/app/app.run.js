'use strict';

export class AppRun {
    static configure() {
        angular
            .module('MUDAR.NOME.DO.MODULO')
            .run(($analytics, $rootScope, $location, $transitions) => {
                var concurrentRequests = 0,
                    dataLayer = window.dataLayer = window.dataLayer || [],
                    hideSpinner = $rootScope.$on('us-spinner:stop', (event, key) => {
                        if(concurrentRequests == 1) {
                            document.querySelector('#' + key).classList.remove('container-spinner');
                        }
        
                        concurrentRequests--;
                    }),
                    showSpinner = $rootScope.$on('us-spinner:spin', (event, key) => {
                        if(concurrentRequests == 0) {
                            document.querySelector('#' + key).classList.add('container-spinner');
                        }
        
                        concurrentRequests++;
                    }),
                    transitionListener = $transitions.onSuccess({}, () => {
                        $analytics.pageTrack($location.path());
                        dataLayer.push({
                            event: 'ngRouteChange',
                            attributes: {
                                route: $location.path()
                            }
                        });
                    });
            });
    }
}

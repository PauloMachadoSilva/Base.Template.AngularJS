'use strict';

import '../styles/styles.sass';
import 'angular';
import 'angular-format-masks';
import 'angular-spinner';
import 'angulartics';
import 'angulartics-google-tag-manager';
import 'angular-input-masks';
import 'angular-sanitize';
import 'angular-touch';
import 'ngstorage';
import 'oclazyload';
import 'spin.js';
import '@uirouter/angularjs';
import { AppAnalytics } from './app.analytics';
import { AppConfig } from './app.config';
import { AppConstants } from './app.constants';
import { AppRouter } from './app.router';
import { AppRun } from './app.run';
import { AppPages } from '../pages/pages.module';
import { AppComponents } from '../components/components.module';

export const AppModule = angular
    .module('MUDAR.NOME.DO.MODULO', [
        'angularSpinner',
        'angulartics',
        'angulartics.google.tagmanager',
        'format.masks',
        'ngLocale',
        'ngSanitize',
        'ngTouch',
        'oc.lazyLoad',
        'ui.router',
        'ui.utils.masks',
        'wza.services',
        'wza.directives',
        AppPages,
        AppComponents
    ])
    .name;

AppAnalytics.configure();
AppConfig.configure();
AppConstants.configure();
AppRouter.configure();
AppRun.configure();

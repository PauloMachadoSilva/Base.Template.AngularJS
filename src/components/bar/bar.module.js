'use strict';

import { ComponentBar } from './bar.component';

/* @ngInject */
export const ComponentBarModule = angular
    .module('MUDAR.NOME.DO.MODULO.components')
    .component('bar', new ComponentBar())
    .name;

'use strict';

export const AppComponents = angular
    .module('MUDAR.NOME.DO.MODULO.components', [])
    .name;

const getComponents = require.context('./', true, /^(?!.*\.spec\.js$).*\.js$/);
getComponents.keys().map(getComponents);

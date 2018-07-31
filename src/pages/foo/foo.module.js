'use strict';

import { PageFooComponent } from './foo.component';

/* @ngInject */
export const PageFooModule = angular
    .module('foo.page', [])
    .component('foo', new PageFooComponent())
    .name;

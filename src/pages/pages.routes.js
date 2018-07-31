'use strict';

import { PageFooRouter } from './foo/foo.router';

/* @ngInject */
export const PagesRoutes = ($stateProvider) => {
    $stateProvider.state(PageFooRouter);
};

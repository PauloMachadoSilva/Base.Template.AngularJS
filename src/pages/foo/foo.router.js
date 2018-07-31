'use strict';

export const PageFooRouter = {
    name: 'foo',
    component: 'foo',
    url: '/',
    lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

        return require.ensure([], () => {
            if (process.env.NODE_ENV == 'test') {
                import('./foo.module');
            } else {
                require('./foo.module');
            }

            $ocLazyLoad.load({ name: 'foo.page' });
        }, 'foo.page');
    }
};

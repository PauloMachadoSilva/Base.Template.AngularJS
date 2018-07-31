module.exports = (config) => {
    'use strict';

    config.set({
        autoWatch: true,
        basePath: '',
        concurrency: Infinity,
        frameworks: [
            'jasmine'
        ],
        files: [
            'spec.bundle.js'
        ],
        exclude: [],
        port: 8081,
        browsers: [ 'ChromeHeadless' ],
        plugins: [
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-jasmine',
            'karma-threshold-reporter',
            'karma-babel-preprocessor',
            'karma-junit-reporter',
            'karma-webpack'
        ],
        colors: true,
        logLevel: config.LOG_INFO,
        preprocessors: {
            'src/**/!(*.spec).js': [ 'coverage' ],
            'src/**/*.js': [ 'babel' ],
            'spec.bundle.js': [ 'webpack' ]
        },
        thresholdReporter: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
        },
        reporters: [
            'spec',
            'threshold',
            'coverage',
            'junit'
        ],
        coverageReporter: {
            dir : '',
            reporters: [
                {
                    subdir: '',
                    type: 'html'
                },
                {
                    file: 'cobertura-coverage.xml',
                    subdir: './',
                    type: 'cobertura'
                }
            ]
        },
        babelPreprocessor: {
            options: {
                presets: [ 'env' ],
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        junitReporter: {
            outputDir: '',
            outputFile: 'tests.xml',
            suite: '',
            useBrowserName: false,
            nameFormatter: undefined,
            classNameFormatter: undefined,
            properties: {},
            xmlVersion: null
        },
        webpack: require('./webpack/webpack.config.karma'),
        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        }
    });
};

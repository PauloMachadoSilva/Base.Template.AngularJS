'use strict';
/* eslint angular/json-functions: 'off' */

const merge = require('webpack-merge');
const devConfig = require('./webpack.config.dev.js');
const webpack = require('webpack');

module.exports = merge(devConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|coverage)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [
                                'istanbul',
                                { 'exclude': [ '**/*.spec.js' ] }
                            ]
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('test') }
        })
    ]
});

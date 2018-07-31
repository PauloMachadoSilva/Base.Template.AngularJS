/* eslint angular/json-functions: 'off' */
'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('../webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    output: {
        chunkFilename: 'assets/js/[name].chunk.js',
        filename: `assets/js/${ common.name }.bundles.js`,
        path: path.resolve(__dirname, '../_dev')
    },
    module: {
    },
    plugins: [
        new CleanWebpackPlugin(
            [ '../_dev' ],
            { allowExternal: true }
        ),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('//esb.webapidev.cd.com/v1/api/'),
            AUTHORIZATION: JSON.stringify('9ec365a9a6664414ac8927b1bda4744c')
        })
    ]
});

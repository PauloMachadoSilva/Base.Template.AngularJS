/* eslint angular/json-functions: 'off' */
'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('../webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        chunkFilename: 'assets/js/[name].chunk.js',
        filename: `assets/js/${ common.name }.bundles.[hash:20].min.js`,
        path: path.resolve(__dirname, '../_prod')
    },
    module: {},
    plugins: [
        new CleanWebpackPlugin(
            [ '../_prod' ],
            { allowExternal: true }
        ),
        new UglifyJSPlugin({
            exclude: /(node_modules|bower_components)/,
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('https://gtw.celular.com.br/v1/api/'),
            AUTHORIZATION: JSON.stringify('c325452a3cf7473e85d375faca1ee812')
        })
    ]
});

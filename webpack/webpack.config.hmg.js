/* eslint angular/json-functions: 'off' */
'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('../webpack.config.js');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    output: {
        chunkFilename: 'assets/js/[name].chunk.js',
        filename: `assets/js/${ common.name }.bundles.js`,
        path: path.resolve(__dirname, '../_hmg')
    },
    module: {
    },
    plugins: [
        new CleanWebpackPlugin(
            [ '../_hmg' ],
            { allowExternal: true }
        ),
        new UglifyJSPlugin({
            exclude: /(node_modules|bower_components)/,
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('//esb.webapihmg.cd.com/v1/api/'),
            AUTHORIZATION: JSON.stringify('c787dc81a50b467ca19d9eba7572c684')
        })
    ]
});

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const name = 'app';
const extractSass = new ExtractTextPlugin({
    filename: `assets/css/${ name }.style.[hash:20].min.css`
});

module.exports = {
    devtool: 'source-map',
    name: name,
    entry: [ `./src/app/${ name }.module.js` ],
    resolve: {
        modules: [
            path.resolve(),
            path.resolve('./src'),
            'node_modules'
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async'
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|bower_components|coverage)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|coverage)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'babel-preset-env' ],
                        plugins: [
                            'angularjs-annotate',
                            'syntax-dynamic-import'
                        ]
                    }
                }]
            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/imgs/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name].[ext]',
                    }
                }
            },
            {
                test: /\.pdf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/pdfs/[name].[hash].[ext]',
                    }
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/svgs/[name].[hash].[ext]',
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new CopyWebpackPlugin([
            'src/manifest.json',
            'src/robots.txt',
            'src/sitemap.xml',
            'src/Web.config',
            { from: 'src/assets/fonts/', to: 'assets/fonts/' },
            { from: 'src/assets/imgs/', to: 'assets/imgs/' }
        ])
    ],
    devServer: {
        compress: false,
        historyApiFallback: true,
        port: 3000
    }
};

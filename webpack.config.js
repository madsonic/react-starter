'use strict';

const webpack = require('webpack');
const { resolve } = require('path');
const path = require('path');

const config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.js',
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/' // necessary for HMR to know where to load the hot update chunks
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ]
            },
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        hot: true,
        port: 8080,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    failOnWarning: false,
                    failOnError: true,
                    configFile: './.eslintrc'
                }
            }
        })
    ]
};

module.exports = config
'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

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
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ]
            }
        ],
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
    ]
};

module.exports = config
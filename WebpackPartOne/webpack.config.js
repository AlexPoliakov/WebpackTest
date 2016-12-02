'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '\\frontend',
    entry: {
        home: './home',
        about: './about',
        common: './common'
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        library: "[name]"
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        contentBase: __dirname + "\\public",  // New
    },
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['','.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['','.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets[]=es2015"
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            warnings: false,
            drop_console: true,
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            chunks: ['about', 'home']
        }),
    ],

};


/*
 Не работает, скорее всего. потому-что операционная система windows, а там другой слеш для резделения пути. Чтоб заработало надо:
 new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en-gb/)
 а универсальное решение:
 new webpack.ContextReplacementPlugin(/node_modules[\\\/]moment[\\\/]locale/, /ru|en-gb/)
 */
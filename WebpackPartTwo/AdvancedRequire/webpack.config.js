'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '\\frontend',  //  Warning '\\'
    entry: {
        app: './app'
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',              //  Warning not slash 'js/' - путь к нашей сборке
        filename: "[name].js",
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        contentBase: __dirname + "\\public",  // Warning "\\"
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
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin ()
    ],

};

/*
 new webpack.optimize.CommonsChunkPlugin({
 name: "common",
 filename: "common.js",
 chunks: ['about', 'home']
 }),
 */

/*

 new webpack.optimize.UglifyJsPlugin({
 mangle: false,
 warnings: false,
 drop_console: true,
 }),

 */
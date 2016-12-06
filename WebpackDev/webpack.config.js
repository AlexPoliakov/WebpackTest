'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function addHash(template, hash) {
    return NODE_ENV == 'production' ?
        template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
}

module.exports = {
    context: __dirname + '\\frontend',
    entry: {
        //style:'./scss/main.scss',
        app: './js/main.js',
    },
    output: {
        path: __dirname + '/public/',
        publicPath: '',
        filename:      addHash('js/[name].js', 'chunkhash:7'),
        chunkFilename: addHash('js/[id][name].js', 'chunkhash:7'),
        library:       '[name]'
    },

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100,
        poll: true
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    resolve: {
        moduleDirectories: ['.'],
        extensions: ['', '.js', 'css', '.scss'],
        root: ['./bower_components'],
        alias: {
            img : __dirname + '../img/'
        }
    },

    module: {
        loaders: [
            {   test: /\.js$/,
                loader: "babel?presets[]=es2015"},

            {   test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader', 'css-loader?importLoaders=1!postcss-loader!sass-loader?sourceMap')},

            {   test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[path][name]-[hash:7].[ext]',
                    'image-webpack-loader']},

            {   test: /\.(eot|svg|ttf|truetype|woff|woff2)$/,
                loader: 'file-loader?name=font/[name]-[hash:7].[ext]'},


            /*

             {   test: /\.(jpe?g|png|gif|svg)$/i,
             loaders: [
             'file?hash=sha512&digest=hex&name=[path][name]-[hash:7].[ext]',
             'image-webpack-loader']},

             {
             test: /\.(eot|svg|ttf|truetype|woff|woff2)$/,
             loader: 'file-loader?name=[path][name].[ext]'
             },

             {
             test:   /\.(png|jpg|svg|gif)$/,
             loader: addHash('file?name=[path][name].[ext]', 'hash:6')
             },
             ?importLoaders=1
             {
             test:   /\.(png|jpg|svg|gif)$/,
             loader: addHash('file?name=[path][name].[ext]', 'hash:6')
             },
             ?importLoaders=1
             {
             test: /\.(png|jpg|svg|gif)$/,
             loader: 'url-loader?limit=8000&name=[path][name].[ext]?[hash]'
             },

            {   test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?importLoaders=1!postcss-loader!sass-loader')},
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            },*/

        ]
    },

    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {removeViewBox: false},
                {removeEmptyAttrs: false}
            ]
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),

        new webpack.NoErrorsPlugin(),

        new ExtractTextPlugin(addHash('[name].css', 'contenthash:7'), {
            allChunks: true,
            //disable: process.env.NODE_ENV=='development'
        }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: addHash('js/common.js', 'hash:7'),
            chunks: ['app']
        }),

        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        })

    ],

    devServer: {
        contentBase: __dirname + '\\public/',
    }

};


/*
 Не работает, скорее всего. потому-что операционная система windows, а там другой слеш для резделения пути. Чтоб заработало надо:
 new webpack.ContextReplacementPlugin(/node_modules\\moment\\locale/, /ru|en-gb/)
 а универсальное решение:
 new webpack.ContextReplacementPlugin(/node_modules[\\\/]moment[\\\/]locale/, /ru|en-gb/)
 */

/*

 new webpack.optimize.CommonsChunkPlugin({
 name: "common",
 filename: "common.js",
 chunks: ['app']
 }),

 */

/*

 new webpack.optimize.UglifyJsPlugin({
 mangle: false,
 warnings: false,
 drop_console: true,
 }),

 devServer: {
 contentBase: __dirname + "\\public",  // New
 },



 */
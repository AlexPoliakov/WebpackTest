'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + '\\frontend',
    entry: {
        app: './app'
    },
    output: {
        path:       __dirname + '/public',
        publicPath: 'public/',
        filename:   "app.js"
    },

    plugins: [
          new webpack.ProvidePlugin({
            map: 'lodash/map',       // частично библиотека
            //_: 'lodash'            // полностью вся
        })
    ]

};
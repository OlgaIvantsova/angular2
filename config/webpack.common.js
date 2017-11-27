var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const autoprefixer = require('autoprefixer');

var path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        root: path.resolve(__dirname, '../src', 'app'),
        alias: {
            departments: 'shared/departments.service',
            employees: 'shared/employees.service',
            'shared': 'shared'
        },
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader?keepUrl=true']
            },
            {
                test: /\.js$/,
                loaders: ['angular2-template-loader'],
                exclude: [/node_modules/, /\.(spec)\.js$/]
            },
            // {
            //     include: path.resolve(__dirname, '../src', 'app'),
            //     test: /\.(html)$/,
            //     loaders: ['html','raw']
            // },
            // {
            //     test: /\.(html)$/,
            //     // exclude: path.resolve(__dirname, '../src', 'app'),
            //     loaders: ['html']
            // },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            },
            /* Async loading. */
            {
                test: /\.async\.(html|css)$/,
                loaders: ['file?name=[name].[hash].[ext]', 'extract']
            },
            {
                test: /\.(sass|scss)$/,
                loaders: [ExtractTextPlugin.extract('style', 'css-loader?sass?sourceMap!resolve-url'), 'raw']
            },
            {
                test: /\.(css)$/,
                exclude: path.resolve(__dirname, '../src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css-loader?sourceMap', 'resolve-url')
            },
            {
                test: /\.(css)$/,
                include: path.resolve(__dirname, '../src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot|ico|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['file-loader?name=img/[name].[ext]?']
            },
            // { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=30000&name=img/[name].[ext]' }
        ],
        postcss: [autoprefixer({ browsers: '> 0%' })]

    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
        new WebpackNotifierPlugin(),

        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL || 'http://localhost:3000/')
        })

    ]
};
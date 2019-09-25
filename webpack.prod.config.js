const webpack = require('webpack');
const HtmlLoader = require('html-loader');
const StyleLoader = require('style-loader');
const Cssloader = require('css-loader');
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');
const fileLoader = require('file-loader');
const clean = require('clean-webpack-plugin');
const sml = require('source-map-loader');
const TerserPlugin = require('terser-webpack-plugin');
const urlLoader = require('url-loader');
const svgUrlLoader = require('svg-url-loader');
const imageLoader = require('image-webpack-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: './app/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[hash].js',
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'app/img'),
            objects: path.resolve(__dirname, 'app/objects'),
            utils: path.resolve(__dirname, 'app/utils'),
            scenes: path.resolve(__dirname, 'app/config/scenes'),
            const: path.resolve(__dirname, 'app/config/constants')
        }
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'app')],
                enforce: "pre"
            },
            {
                test: /\.(jpe?g|png)$/,
                use: [
                    {loader: 'url-loader', options: {limit: 10 * 1024, name: '[hash].[ext]'}},
                    {loader: 'image-webpack-loader', options: {enforce: 'pre'}},
                ],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader', options: {
                        limit: 10 * 1024,
                        noquotes: true,
                        name: '[name].[ext]'
                    }
                }],

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new clean('dist'),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[hash].css',
            chunkFilename: '[id].css',
        }),
        new htmlwebpackplugin({
            template: './app/index.html'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};

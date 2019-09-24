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

module.exports = {
    mode: "production",
    // mode: "development",
    devtool: 'inline-source-map',
    entry: './app/index.js',
    output: {
        path: __dirname + '/',
        filename: 'index.js',
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'app/img'),
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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                include: [path.join(__dirname, 'app')],
                enforce: "pre"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }   
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
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
        new htmlwebpackplugin({
            template: './app/index.html'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};

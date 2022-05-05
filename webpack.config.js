const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

const plugins = [
    new HTMLWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
]

module.exports = {

    mode,

    target,

    plugins,

    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, 'dir'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },

    devtool: 'source-map',

    devServer: {
        hot: true,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader']},
            {
                test: /\.(s[ac]c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png| jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    }
}
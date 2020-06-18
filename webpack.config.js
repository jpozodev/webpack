const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: {
        app: './app.js',
        mobile: './app-mobile.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Mi primera app generada con webpack',
            filename: 'index2.html',
            template: 'template.html',
            hash: true,
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            title: 'Mi primera app version movil generada con webpack',
            filename: 'index2-mobile.html',
            template: 'template-mobile.html',
            hash: true,
            chunks: ['mobile']
        })
    ]
};
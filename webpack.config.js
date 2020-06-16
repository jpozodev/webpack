const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
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
            hash: true
          })
    ]
};
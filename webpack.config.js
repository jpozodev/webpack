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
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  },
                ],
              }
            // {
            //     test: /\.jpg$/,
            //     loader: "file-loader?name=[path][name].[ext]"
            // }
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
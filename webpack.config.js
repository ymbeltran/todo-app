const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo-app/bundle.js',
        publicPath: '/todo-app/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@styles': path.resolve(__dirname, 'src/styles')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [ "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new WebpackPwaManifestPlugin({
            name: 'TODO List - The easiest way to get things done',
            shortname: 'TODO List ✅ ',
            description: 'Get ready to reach your goals in a simple way with TODO List',
            background_color: '#161722',
            theme_color: '#b97eee',
            icons: [
              {
                src: path.resolve('src/assets/icon.png'),
                sizes: [96, 128, 192, 256, 384, 512],
                purpose: "any maskable"
              }
            ]
          }),
          new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
              {
                urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                handler: 'CacheFirst',
                options: {
                  cacheName: 'images'
                }
              },
              {
                urlPattern: new RegExp('http://localhost:3000/todo-app/'),
                handler: 'NetworkFirst',
                options: {
                  cacheName: 'api'
                }
              }
            ]
          }),
    ],
    devServer:{
        historyApiFallback: true,
        allowedHosts: path.join(__dirname,'dist'),
        compress: true,
        port: 3000,
    }
}
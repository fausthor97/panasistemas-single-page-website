const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(css|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "./img/[name].[ext]",
                    }
                }
            },
            {
                test: /\.gif$/,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "./fonts/[name].[ext]",
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-image-src','img:src']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: 'src/cart.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'store.html',
            template: 'src/store.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

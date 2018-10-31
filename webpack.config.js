const
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "./img/[name].[ext]",
                    }
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
            title: 'Comprar - Panasistemas',
            filename: 'cart.html',
            template: 'src/cart.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Tienda - Panasistemas',
            filename: 'store.html',
            template: 'src/store.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Panasistemas Telecomunicaciones',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};

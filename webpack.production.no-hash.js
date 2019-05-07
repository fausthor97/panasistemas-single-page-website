const
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"), 
  path = require('path'), 
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ] 
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "img/[name].[ext]",
                    },
                },
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
                        name: "fonts/[name].[ext]",
                    },
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['li:data-src', 'li:data-thumb', ':data-image-src','img:src']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nombre del Producto - Panasistemas',
            filename: 'product.html',
            template: 'src/product.html'
        }),
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
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/favicon.png',
            prefix: 'icons/'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};

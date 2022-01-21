const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/coffee/index.coffee",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    "html-loader",
                    "pug-html-loader"
                ]
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.coffee$/,
                use: ["babel-loader", "coffee-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/pug/index.pug"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery'
        }),
    ],
    resolve: {
        extensions: [ '.coffee', '.js' ],
    }
};
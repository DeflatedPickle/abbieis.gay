const path = require("path");
const fs = require('fs');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages =
    fs
        .readdirSync(path.resolve(__dirname, 'src/pug/'))
        .filter(name => name.endsWith('.pug'))

module.exports = {
    entry: {
        index: "./src/coffee/index.coffee",
        aml: "./src/coffee/aml.coffee"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
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
        ...pages.map(page => new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            inject: true,
            hash: true,
            template: `${path.resolve(__dirname, "src")}/pug/${page}`,
            filename: `${path.parse(page).name}.html`,
            chunks: `${path.parse(page).name}`
        })),
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

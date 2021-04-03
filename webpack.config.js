const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        }, {
            test: /\.(css)/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.(scss|sass)/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
        }],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash].css',
        })
    ]
};
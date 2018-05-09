const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './client/src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['./client/dist']),
        new HtmlWebpackPlugin({
            template: './client/index.html',
            title: 'Demo Page',
            inject: "body"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'client/dist'),
        chunkFilename: '[name].bundle.js'
    }
};
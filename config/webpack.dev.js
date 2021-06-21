const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map'
});
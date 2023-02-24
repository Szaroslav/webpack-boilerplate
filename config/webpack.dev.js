const path = require('path');
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
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8000/'
            },
            { reload: false }
        )
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '../public')
        },
        port: 8000,
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    devtool: 'inline-source-map'
});
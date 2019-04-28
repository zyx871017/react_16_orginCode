const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './app.js',
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, './dist')
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
const path = require('path');
const Html = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'dist'),
        chunkFilename: '[id].[chunkhash].js',
        filename: '[id].[hash:12].js',
    },
    plugins: [
        new Html({
            chunks: ['main'],
            filename: './index.html',
            inject: true,
            template: './src/index.html',
        }),
        new Uglify(),
    ],
};

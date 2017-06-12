var path = require('path')
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}
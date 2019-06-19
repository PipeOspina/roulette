const path = require('path');

const rules = [{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
}, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}, {
    test: /\.(jpe?g|png|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 10000
        }
    }]
}, {
    test: /\.(eot|svg|ttf|woff2?|otf)$/,
    use: 'file-loader'
}]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: path.join(__dirname, 'src', 'app.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: './',
        port: 5000
    }
}
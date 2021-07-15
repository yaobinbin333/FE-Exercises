const path = require('path') // 处理绝对路径
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'), // 入口文件
    output: {
        path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
        filename: 'app.js' //打包后输出文件的文件名
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.ttf$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
}
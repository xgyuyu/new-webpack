const argv = require("yargs-parser")(process.argv.slice(2));
const HtmlWebpackPlugin = require('html-webpack-plugin')
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const { join, resolve } = require("path");
console.log("🍎", argv.mode);
const webpackConfig = {
    entry: {
        app: resolve("./src/web/index.jsx")
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve("src")],
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/, // 不检测的文件
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 指定模板
            title: '我是标题', // 设置打包后的html的标题
            // hash: true,
            inject: true,
            minify: {
                removeAttributeQuotes: true, // 让html去除双引号
                collapseWhitespace: true // 去除空格html都在一行
            }
        })
    ]
}

module.exports = merge(webpackConfig, _mergeConfig);
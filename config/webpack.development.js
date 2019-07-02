const { join } = require("path");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    devServer: {
        contentBase: join(__dirname, "../dist"),
        quiet: true,
        hot: true
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBuildNotifierPlugin({
            title: "Webpack Build",
            suppressSuccess: true
        })
    ],
}
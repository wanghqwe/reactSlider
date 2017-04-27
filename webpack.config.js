var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("./build"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        contentBase: "./build",
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader"
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        })
    ]


};
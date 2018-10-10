const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    entry: path.join(__dirname, 'src/index.jsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new extractTextPlugin('style.css')
    ],


    module: {
        rules: [
          /* babel */  {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "react"]
                        }
                    }
                ]
            },
          /* favicon */  {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
          /* css */  {
                test: /\.css$/,
                use: extractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: 'css-loader'
                    }
                )
            }
        ]
    },

    devServer: {
        publicPath: "/",
        contentBase: "./dist"
    }
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require("dotenv")

module.exports = (argv) => {
    const isDev = argv.mode === 'development'

    const env = dotenv.config().parsed || {}

    const envKeys = Object.keys(env).reduce((acc, key) => {
        acc[`process.env.${key}`] = JSON.stringify(env[key])
        return acc
    }, {})

    const config = webpack.Configuration = {
        mode: argv.mod ?? 'development',
        entry: [path.resolve(__dirname, 'src', 'index.tsx')],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            clean:true
        },
        plugins: [
            new HtmlWebpackPlugin( {
                template: path.resolve(__dirname, 'public', 'index.html'),
                minify: isDev ? false : {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css'
            }),
            new webpack.DefinePlugin(envKeys),
        ],
        devtool: isDev && "inline-source-map",
        devServer: isDev ? {
            port: 3000,
            open:true,
            hot: true, 
        } : undefined,

        resolve: {
            extensions: ['.ts', '.tsx', '.js'], 
        },
        optimization: {
            splitChunks: {
                chunks: 'all',  
            },
            runtimeChunk: 'single',
            minimize: !isDev, 
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,  
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    }
                },
                {
                    test: /\.css$/i, 
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ],
                    },
            ],
        },
    }
    return config
};

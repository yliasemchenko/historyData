const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require("dotenv")

module.exports = (argv) => {
    const isDev = argv.mod === 'development'

    const env = dotenv.config().parsed || {}

    const envKeys = Object.keys(env).reduce((acc, key) => {
        acc[`process.env.${key}`] = JSON.stringify(env[key])
        return acc
    }, {})

    const config = webpack.Configuration = {
        mode: argv.mod ?? 'development',
        entry: ['core-js/stable', 'regenerator-runtime/runtime', path.resolve(__dirname, 'src', 'index.tsx')],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean:true
        },
        plugins: [
            new HtmlWebpackPlugin( {
                template: path.resolve(__dirname, 'public', 'index.html')
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
            onListening: (server) => {
                console.log(`Webpack Dev Server слушает на порту ${server.listeningApp.address().port}`)
            }
        } : undefined,

        resolve: {
            extensions: ['.ts', '.tsx', '.js'], 
        },
        optimization: {
            splitChunks: {
                chunks: 'all',  
            },
            minimize: !isDev, 
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,  
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.html$/i,
                    loader:'html-loader'
                },
                {
                    test: /\.css$/i, 
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ],
                    },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(?:js|mjs|cjs)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
                {
                    test: /\.svg$/i,
                    use: ['@svgr/webpack', 'file-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',  
                            options: {
                                name: '[path][name].[ext]', 
                                outputPath: 'images/',
                                esModule: false, 
                            },
                        },
                    ],
                },
            ],
        },
    }
    return config
};

const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const vendorIds = Object.keys(require('./package.json').dependencies);

const config = {
    target: 'web',
    entry: {
        demo: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:9000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/demo/index.js'),
        ],
        vendor: vendorIds,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devtool: PRODUCTION ? false : 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: path.join(__dirname, 'src/demo'),
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),
        new LodashModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity,
        }),
    ],
};

module.exports = config;

/**
 * Created by amurav on 22.03.2017.
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
    entry: './app/index.js',
    output: {

        filename: './app/webpack.bundle.js'},
    // module:{
    //     rules: [
    //         {test: /\.(js|jsx)$/, use: 'babel-loader'},
    //         {
    //             test: /\.css$/,
    //             use: [ 'style-loader', 'css-loader' ]
    //         }
    //     ]
    // },
    module:{
        rules: [
            {   test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
                // query: {
                //   presets: ['latest']
                // }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')

    ],
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null

};
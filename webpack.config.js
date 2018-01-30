var webpack = require("webpack");
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});
var CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': "jquery"});
module.exports = {
    entry: {
        index: "./src/js/entry.js"
    },
    output: {
        path: "./out/",
        publicPath: "http://localhost:8080/out/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            {test: /\.(jpg|png|svg|gif)$/, loader: "url-loader?limit=8192&name=./[name].[ext]"}
        ]
    },
    plugins: [uglifyJsPlugin, CommonsChunkPlugin, providePlugin]
}
/**
 * Created by Lyle on 6/15/2016.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname, // where the app lives
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/scripts.jsx",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [ // do this if we are in production mode
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
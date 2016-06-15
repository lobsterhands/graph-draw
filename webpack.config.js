/**
 * Created by Lyle on 6/15/2016.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname, // where the app lives
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/js/scripts.jsx",
    module: {
      loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015']
              }
          }
      ]
    },
    output: {
        path: __dirname + "/src/js",//+ "./src/js/",
        filename: "scripts.min.js"
    },
    plugins: debug ? [] : [ // do this if we are in production mode
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
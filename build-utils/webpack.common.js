const commonPaths = require("./common-paths");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  output: {
    filename: "[hash].bundle.js",
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};

module.exports = config;

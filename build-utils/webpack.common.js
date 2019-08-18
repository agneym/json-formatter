const commonPaths = require("./common-paths");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: commonPaths.startPoint,
    "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    globalObject: "self",
    filename: "[name].bundle.js",
    path: commonPaths.outputPath,
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|eot|ttf|woff|woff2)$/i,
        use: [
          // uses file-loader as default fallback.
          {
            loader: "url-loader",
            options: {
              limit: 1000
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
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

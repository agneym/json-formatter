const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const commonPaths = require("./common-paths");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|dist|build-utils|webpack.config.js)/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: commonPaths.public,
          to: commonPaths.outputPath,
          globOptions: {
            ignore: ["index.html"],
          },
        },
        {
          from: "_redirects",
          to: commonPaths.outputPath,
        },
      ],
    }),
    new MomentLocalesPlugin(),
    new LodashModuleReplacementPlugin(),
    ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  ],
};

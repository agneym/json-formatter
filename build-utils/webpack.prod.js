const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const path = require("path");
const commonPaths = require("./common-paths");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
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
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: commonPaths.root,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
    }),
    new workboxPlugin({
      globDirectory: commonPaths.outputPath,
      globPatterns: ["**/*.{html,js,css}"],
      swDest: path.join(commonPaths.outputPath, "sw.js"),
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin([
      {
        from: commonPaths.public,
        to: commonPaths.outputPath,
        ignore: ["index.html"],
      },
      {
        from: "_redirects",
        to: commonPaths.outputPath,
      },
    ]),
    new MomentLocalesPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};

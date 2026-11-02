const { rspack } = require("@rspack/core");
const { GenerateSW } = require("workbox-webpack-plugin");
const commonPaths = require("./common-paths");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  devtool: "source-map",
  mode: "production",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new rspack.EnvironmentPlugin({
      NODE_ENV: "production",
      DEBUG: false,
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: commonPaths.public,
          to: commonPaths.outputPath,
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
        {
          from: "_redirects",
          to: commonPaths.outputPath,
        },
      ],
    }),
    ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  ],
};

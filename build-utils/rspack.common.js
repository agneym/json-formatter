const commonPaths = require("./common-paths");
const { rspack } = require("@rspack/core");

const config = {
  entry: {
    app: commonPaths.startPoint,
  },
  output: {
    filename: "[name].bundle.js",
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|eot|ttf|woff|woff2)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1000,
          },
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|dist|build-utils|rspack.config.js)/,
      },
    ],
  },
  plugins: [
    new rspack.ProgressPlugin(),
    new rspack.HtmlRspackPlugin({
      template: "public/index.html",
    }),
  ],
};

module.exports = config;

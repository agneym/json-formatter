const config = {
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    client: {
      overlay: true,
    },
    hot: true,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
};

module.exports = config;

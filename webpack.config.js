const commonConfig = require("./build-utils/webpack.common.js");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  process.env.NODE_ENV = env === "prod" ? "production" : "development";
  const envConfig = require(`./build-utils/webpack.${env}.js`);
  return webpackMerge(commonConfig, envConfig);
};

const commonConfig = require("./build-utils/rspack.common.js");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  const envName = env.prod ? "prod" : "dev";
  process.env.NODE_ENV = env.prod ? "production" : "development";
  const envConfig = require(`./build-utils/rspack.${envName}.js`);
  return merge(commonConfig, envConfig);
};

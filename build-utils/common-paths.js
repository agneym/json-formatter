const path = require("path");
const glob = require("glob");

module.exports = {
  root: path.resolve(__dirname, ".."),
  outputPath: path.resolve(__dirname, "../", "dist"),
  appSrc: path.resolve(__dirname, "../", "src"),
  public: path.resolve(__dirname, "../", "public")
};

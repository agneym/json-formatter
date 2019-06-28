module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      stylelint: true,
      "postcss-preset-env": true,
      cssnano: env === "production"
    }
  };
};

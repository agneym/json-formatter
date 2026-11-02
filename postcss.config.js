module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      "postcss-preset-env": true,
      cssnano: env === "production",
    },
  };
};

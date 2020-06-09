const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
  "@babel/preset-react",
];

const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  "babel-plugin-styled-components",
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-proposal-optional-chaining",
  "babel-plugin-lodash",
];

module.exports = { presets, plugins };

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      vm: false,
      crypto: require.resolve("crypto-browserify"),
      "crypto-browserify": require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [new NodePolyfillPlugin()],
};

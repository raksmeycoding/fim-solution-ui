const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../.env"),
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
});

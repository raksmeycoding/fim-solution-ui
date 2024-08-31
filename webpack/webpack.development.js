const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../.env"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    open: true,
    hot: true,
    historyApiFallback: true, // This option is important for React Router
    port: 8082,
    // devMiddleware: {
    //   writeToDisk: true,
    // },
  },
});

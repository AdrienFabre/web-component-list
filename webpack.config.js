const Dotenv = require("dotenv-webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    node: {
      fs: "empty"
    },
    mode,
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new CopyWebpackPlugin([
        {
          context: "node_modules/@webcomponents/webcomponentsjs",
          from: "**/*.js",
          to: "webcomponents"
        }
      ])
    ],

    devtool: mode === "development" ? "source-map" : "none"
  };
};

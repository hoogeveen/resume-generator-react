const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

const config = {
  devServer: {
    host: "0.0.0.0",
    compress: true,
    disableHostCheck: true,
  },
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        include: "./public/images",
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            outputPath: "./dist/images",
          },
        },
      },
    ],
  },
  plugins: [htmlPlugin],
};

module.exports = config;

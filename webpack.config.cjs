const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// import path from "path"

module.exports = {
  mode: "production",
  entry: { index: path.resolve(__dirname, "public/scripts/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  //   devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "planetOxy",
      filename: "index.html",
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public/assets",
          to: "assets",
        },
        {
          from: "public/css",
          to: "css",
        },
      ],
    }),
  ],
};

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
// const { default: autoprefixer } = require("autoprefixer");
import path from "path";
import dirname from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import uncss from "postcss-uncss";
import { fileURLToPath } from "url";
// import path from "path"

const config = {
  mode: "production",
  entry: { index: path.resolve("public/scripts/index.js") },
  output: {
    path: path.resolve("dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  //devtool: "source-map",
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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(
                  fileURLToPath(import.meta.url),
                  "/postcss.config.js"
                ),
                plugins: [
                  [autoprefixer, { browsers: ["last 2 versions", "> 5%"] }],
                  [cssnano, { preset: "default" }],
                  [
                    uncss,
                    {
                      html: path.resolve(
                        fileURLToPath(import.meta.url + "/dist/*.html")
                      ),
                    },
                  ],
                ],
              },
            },
          },
        ],
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

export default config;

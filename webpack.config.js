const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = (env, options) => {
  const dev = options.mode === "development"
  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: dev ? "bundle.js" : "[name].bundle.js",
      chunkFilename: "[name].chunks.js",
      publicPath: dev ? "/" : ""
    },
    devServer: dev
      ? {
          overlay: true,
          historyApiFallback: true
        }
      : {},
    optimization: {
      splitChunks: {
        minChunks: 1,
        cacheGroups: {
          default: false
        },
        chunks: "all"
      },
      moduleIds: "hashed",
      chunkIds: "named"
      //usedExports: true,
      //minimizer: [
      //  new TerserPlugin({
      //    cache: true,
      //    parallel: true,
      //    sourceMap: false,
      //    terserOptions: {
      //      warnings: false,
      //      ie8: false
      //    }
      //  }),
      //]
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader"
            }
          ]
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader"
        },
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            plugins: [
              ["@babel/plugin-proposal-class-properties"],
              "babel-plugin-syntax-dynamic-import"
            ]
          }
        },
        {
          test: /\.css$/,
          use: dev
            ? ["style-loader", "css-loader"]
            : [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.scss$/,
          use: dev
            ? ["style-loader", "css-loader", "sass-loader"]
            : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "file?name=fonts/[name].[ext]"
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: dev
            ? "url-loader"
            : [
                "file-loader?name=./static/media/[name].[hash:8].[ext]",
                {
                  loader: "img-loader",
                  options: {
                    plugins: [
                      require("imagemin-gifsicle")({
                        interlaced: false
                      }),
                      require("imagemin-mozjpeg")({
                        progressive: true,
                        arithmetic: false
                      }),
                      require("imagemin-pngquant")({
                        floyd: 0.5,
                        speed: 2
                      }),
                      require("imagemin-svgo")({
                        plugins: [
                          { removeTitle: true },
                          { convertPathData: false }
                        ]
                      })
                    ]
                  }
                }
              ]
        }
      ]
    },
    plugins: dev
      ? [
          new HtmlWebpackPlugin({
            template: "./index.html",
            inject: "body"
          })
        ]
      : [
          new HtmlWebpackPlugin({
            template: "./index.html",
            inject: "body"
            //filename: "./index.html",
            //favicon: "./favicon.ico"
          }),
          new CleanWebpackPlugin("build", {}),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
        ]
  }
}

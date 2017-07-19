const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { root, generateScopedName } = require('./helpers');
const config = require('./config');

module.exports = {
  entry: {
    vendor: './src/vendor.js',
    app: './src/index.js',
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.test\.jsx?$).*\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          extends: root('.babelrc'),
          plugins: [
            [
              'react-css-modules',
              {
                context: 'common.context',
                filetypes: {
                  '.scss': {
                    syntax: 'postcss-scss',
                  },
                },
                generateScopedName,
                webpackHotModuleReloading: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: false,
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: root('src/core/assets/'),
      to: root('dist/assets/'),
    }]),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
    }),

    new HtmlWebpackPlugin({
      title: config.title,
      themeColor: config.themeColor,
      filename: '200.html',
      template: 'src/index.ejs',
    }),

    new HtmlWebpackPlugin({
      title: config.title,
      themeColor: config.themeColor,
      template: 'src/index.ejs',
    }),
  ],
};

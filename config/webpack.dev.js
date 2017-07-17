const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const { root, generateScopedName } = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                getLocalIdent: (context, localIdentName, localName) => generateScopedName(localName, context.resourcePath),
                minimize: false,
                importLoaders: 1,
                camelCase: true,
                sourceMaps: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },

  output: {
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});

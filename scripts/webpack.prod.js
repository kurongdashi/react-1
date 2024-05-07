const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.base');

const proConfig = {
  // mode:'production',
  // devtool:'source-map',
  mode: 'development',
  devtool: false
};

module.exports = merge(proConfig, baseConfig);

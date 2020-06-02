const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.ts',
    vendors: ['phaser']
  },

  module: {
    rules: [
      fetchTSRules()
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')}
      ]
    })
  ],

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
};

function fetchTSRules() {
    return {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }

}
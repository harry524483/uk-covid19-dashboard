const path = require('path');
const slsw = require('serverless-webpack');
const isLocal = slsw.lib.webpack.isLocal;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'source-map' : 'none',
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.xlsx$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};

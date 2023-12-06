const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const clientcommonconfig = require('./webpack.client.common');
const servercommonconfig = require('./webpack.server.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const constants = require('./constants');
const clientConfig = merge(clientcommonconfig, {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.resolve(__dirname, '..', './src/app/index.js'),
    appVendor: path.resolve(__dirname, '..', './vendor.js'),
  },
  output: {
	filename: '[name].js',
	path: constants.CLIENT_OUTPUT_DIR,
  },
  stats: 'minimal',
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
	new WebpackManifestPlugin({
		publicPath: '/'
	}),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/images', to: 'images/' }],
    }),
    new webpack.DefinePlugin({
      HTTP_DEFAULT_TIMEOUT: 5000,
    }),
  ],
});

const serverConfig = merge(servercommonconfig, {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
	path: constants.SERVER_OUTPUT_DIR,
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  stats: 'minimal',
  devtool: 'inline-cheap-module-source-map',

  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new ProgressBarPlugin(),

    new NodePolyfillPlugin(),
    new NodemonPlugin({
      watch: path.resolve('../build'),
      ext: 'js,json',
      filename: 'server.js',
      verbose: true,
      env: {
        NODE_ENV: 'development',
      },
    }),
    new webpack.DefinePlugin({
      HTTP_DEFAULT_TIMEOUT: 5000,
    }),
  ],
});

module.exports = [clientConfig, serverConfig];

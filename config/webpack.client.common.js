const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  module: {
    rules: [
      {
        test: /\.?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif|pdf)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          }
        ],
      },
    ],
  },
};

module.exports = config;

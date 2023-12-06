const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test:/\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = config;

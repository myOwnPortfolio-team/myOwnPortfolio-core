const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './app/index.jsx',
  output: {
    filename: 'dist/script/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '/node_modules/react'),
    },
  },
  plugins: [],
};

module.exports = (env) => {
  if (env && env.production) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
      new BabiliPlugin(),
    );
  }
  return config;
};

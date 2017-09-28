const path = require('path');

module.exports = {
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
};

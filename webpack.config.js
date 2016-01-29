module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: 'dist',
    filename: 'react-reach.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
};

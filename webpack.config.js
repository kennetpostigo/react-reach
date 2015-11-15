module.exports = {
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: './dist/bundle.js'
  }
};

var webpack = require('webpack');
var env = process.env.NODE_ENV;
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
     library: 'react-reach',
     libraryTarget: 'umd'
   },
  plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  })
]
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  )
}

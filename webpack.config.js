module.exports = {
  entry: {
    global: './js/global.js',
  },
  output: {
    path: './js/',
    publicPath: '/js/',
    filename: '[name].bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel', // connected to the package.json ependencies / node_modules
        query: {
          presets: ['es2015', 'react'] // es6 is es2015 / also from node_modules
        }
      }
    ]
  }
}

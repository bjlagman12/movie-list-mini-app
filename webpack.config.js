const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /(.js$|.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
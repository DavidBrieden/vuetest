const path = require('path');

module.exports = {
  entry: './src/client/scripts/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src/client/wwwroot'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/client/wwwroot')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  }
};

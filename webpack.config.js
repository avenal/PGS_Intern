var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});
 
var config = {
  entry: ['./src/index.js'],
 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
 
  mode: 'development',
 
  devtool: 'cheap-module-eval-source-map',
 
  resolve: {
    extensions: ['.js', '.jsx']
  },
 
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
 
module.exports = config;
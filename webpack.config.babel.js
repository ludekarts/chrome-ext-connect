const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export default () => ({
  entry: {
    menu: './extension/scripts/menu.js',
    content: './extension/scripts/content.js',
    options: './extension/scripts/options.js',
    background: './extension/scripts/background.js',
  },
  devtool: "inline-sourcemap",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },{
        test: /\.css$/,
        loader: ['style-loader', 'css-loader',]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './extension' }
    ],{
      ignore: ['scripts/*']
    })
  ]
});

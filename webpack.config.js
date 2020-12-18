/*
 * @Author: Yu Xin
 * @Date: 2020-10-23 10:19:27
 * @LastEditors: Yu Xin
 * @LastEditTime: 2020-12-19 00:40:01
 * @Description: file content
 */
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'sbridge',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  plugins: [

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: [require('babel-plugin-transform-runtime')]
          }
        }
      }
    ]
  }
}

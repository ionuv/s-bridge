const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'sbridge',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  // resolve: {
  //   // 设置别名
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')// 这样配置后 @ 可以指向 src 目录
  //   }
  // },
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

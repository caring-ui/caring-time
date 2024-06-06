/*
 * @Author: Wanko
 * @Date: 2023-02-15 18:43:10
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-31 17:49:48
 * @Description: 
 */
const { resolve } = require('path')
const webpack = require('webpack')



const entry = resolve(__dirname, 'index.js')
module.exports = {
  entry: ['webpack-hot-middleware/client', entry],
  output: {
    filename: 'index.js',
    // path: resolve(__dirname, 'bundle')
    // publicPath: '/__build__/'
  },
  mode: 'production',
  // output: ''
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ]
}
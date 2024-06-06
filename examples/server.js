/*
 * @Author: Wanko
 * @Date: 2023-02-15 18:21:39
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 15:35:21
 * @Description: 
 */
const express = require('express')
const app = express()
const webpackDevMiddleware = require('webpack-dev-middleware')
const WebpackConfig = require('./webpack.config')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpack = require('webpack')
const compiler = webpack(WebpackConfig)


app.use(
  webpackDevMiddleware(compiler, {
    // publicPath: '/__build__/', 
    stats: {
      colors: true,
      chunks: false
    }
  })
)
app.use(webpackHotMiddleware(compiler))

// 请求静态文件
app.use(express.static(__dirname))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

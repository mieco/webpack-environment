const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// 监听3000端口
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});
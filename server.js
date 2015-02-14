// Import required modules.
var express = require('express');
//var stormpath = require('express-stormpath');
var path = require('path');
var http = require('http');
//var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var favicon = require('express-favicon');
//var mongoskin = require('mongoskin');
//var CryptoJS = require("crypto-js");
var nodejsx     = require('node-jsx').install();
var development = process.env.MODE !== 'production';
development = true;
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

// route helper

var app = express();
app.set('port', 8000);

// less to css transformer
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

if (development){
  app.use(webpackMiddleware(webpack(require('./webpack.config.js')),
  {
    watchDelay: 1000,
    stats: {
      colors: true
    }
  }));
}
app.listen(app.get('port'), function (err) {
  console.log("Server started; listening on port " + app.get('port'));
  console.log('Point your browser to http://localhost:'+app.get('port'));
});

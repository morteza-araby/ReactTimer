/** Bootstrap will start the express server */

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 4080;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});



//const Server = require('./server.js')
//const PORT = process.env.PORT || 4080
//const app = Server.app()

/*if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}
*/
//app.listen(PORT, function(){
//  console.log(`Listening at http://localhost:${PORT}`)
//})

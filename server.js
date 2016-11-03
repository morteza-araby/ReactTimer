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


// var express = require('express')
// // Create our app
// module.exports = {
//   app: function () {
//     const app = express()
//     const PORT = process.env.PORT || 4080

//     // This will forward all https request to http
//     // Should be adjusted accordingly
//     app.use(function (req, res, next) {
//       if (req.headers['x-forwarded-proto'] === 'https') {
//         res.redirect('http://' + req.hostname + req.url)
//       } else {
//         next()
//       }
//     })
//     app.use(express.static(__dirname + '/public'))

//    /* app.listen(PORT, function () {
//       console.log('Express server is up on port ' + PORT)
//     })*/
//     return app
//   }
// }


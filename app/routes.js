var controllers = require('./controllers');
var User = require('./models').user;
var jwt = require('jsonwebtoken');

module.exports = function(app) {
  app.get('/', function(req, res) {
    return res.send("hello world");
  });

  app.post('/users', controllers.user.create);
  app.get('/me', function(req, res, next) {
    jwt.verify(req.headers.authorization, "asdf", {}, function (err, token) {
      if (err) { return res.status(401).send("unauthenticated"); }
      User.findOne({ id: token.id }, function (err, user) {
        if (err) { return res.status(400).send(err); }
        return next()
      });
    }); 
  }, function(req, res) {
    res.send("success");
  });

  app.get('/hello', function(req, res) {
    return res.send("Hello from me!"); 
  });
}
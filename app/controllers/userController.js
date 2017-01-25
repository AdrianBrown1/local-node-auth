var User = require('../models').user;
var jwt = require('jsonwebtoken');

module.exports = {
  create: function (req, res) {
    User.create(req.body, function (err, user) {
      if (err) { return res.status(400).send(err); }

      return res.send({
        token: jwt.sign({ id: user.id }, "asdf", { expiresIn: 7200 }), 
        user: user});
    });
  }
}
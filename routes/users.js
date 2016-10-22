var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function (req, res, next) {
  var vm = { title: 'Register User' }
  res.render('users/register', vm);
});

router.post('/register', function (req, res, next) {
  userService.addUser(req.body, function (err) {
    if (err) {
      var vm = {
        title: 'Register User',
        input: req.body,
        error: 'something went wrong'
      }
      return res.render('users/register', vm);
    }
    res.redirect('/')
  });
});

module.exports = router;

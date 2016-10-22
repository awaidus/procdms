var User = require('../models/user').User;

exports.addUser = function (user, next) {
    var newUser = new User({
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
        password : user.password,
        created: user.created
    });

    newUser.save(function(err) {
        if (err) {
            return next(err);
        }
        next(null);
    });  
};
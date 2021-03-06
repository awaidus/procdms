var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userScehma = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userScehma);

module.exports = {
    User: User
};
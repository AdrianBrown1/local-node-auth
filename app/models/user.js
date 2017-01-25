var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String,
});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return password === this.local.password;
};

module.exports = mongoose.model('User', userSchema);
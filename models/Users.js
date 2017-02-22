
var mogooes = require('mongoose');

var usersSchema = require('../schemas/users');

module.exports = mogooes.model('Users',usersSchema);
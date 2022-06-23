var User = require('../models/user.model');
var model = new User();

exports.getUsers = async function(req, res) {
    model.getUsers(function(err, data) {
        res.send({
            result: data, error: err
        });
    });
}

exports.getUserById = async function(req, res) {

}
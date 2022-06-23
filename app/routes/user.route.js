module.exports = function(app) {
    var userController = require('../controllers/user.controller')

    app.get('/users', userController.getUsers);
    app.get('/user/:id', userController.getUserById);
};
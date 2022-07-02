var express = require('express');
let router = express.Router();

var userController = require('../controllers/user.controller')

router.get('/users', userController.getAlls);
router.get('/user/:id', userController.getById);
router.post('/user', userController.Create);
router.put('/user', userController.Update);
router.delete('/user/:id', userController.deleteById);

module.exports = router;
// var User = require('./app/models/user.mode');
// const userController = require('./app/controllers/user.controller');

var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
var app = express();
// var router = express.Router();
var userRouter = require('./app/routes/user.route');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router)

// router.use((req, res, next) => {
//     console.log('middleware');
//     next();
// });

userRouter(app);

// router.route('/users').get((req, res) => {
//     userController.getUsers().then(result => {
//         // console.log(result);
//         res.json(result[0]);
//     });
// });

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server is running at ' + port);


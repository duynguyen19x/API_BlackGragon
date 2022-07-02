const userRouter = require('./user.route');

function routes(app) {
    app.use('/api', userRouter);
};

module.exports = routes;

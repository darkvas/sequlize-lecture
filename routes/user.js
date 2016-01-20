module.exports = function(app) {

    var express = require('express');
    var userRouter = express.Router();

    var UserHandler = require('../handlers/user');
    var userHandler = new UserHandler(app);

    userRouter.route('/')
        .get(userHandler.getAll)
        .post(userHandler.create);

    userRouter.route('/find/:name')
        .get(userHandler.findByName);

    userRouter.route('/:id')
        .get(userHandler.getOne)
        .put(userHandler.update)
        .delete(userHandler.remove);

    return userRouter;
};
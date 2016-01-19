
module.exports = function(app) {

    var express = require('express');
    var userRouter = express.Router();

    var UserHandler = require('../handlers/user');
    var userHandler = new UserHandler(app);

    userRouter.get('/', userHandler.getAll);
    userRouter.post('/', userHandler.create);
    userRouter.get('/:id', userHandler.getOne);
    userRouter.delete('/:id', userHandler.remove);
    userRouter.get('/find/:name', userHandler.findByName);

    return userRouter;
};
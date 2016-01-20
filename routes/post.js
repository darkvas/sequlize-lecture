module.exports = function(app) {

    var express = require('express');
    var postRouter = express.Router();

    var PostHandler = require('../handlers/post');
    var postHandler = new PostHandler(app);

    postRouter.route('/')
        .get(postHandler.getAll)
        .post(postHandler.create);

    postRouter.route('/:id')
        .get(postHandler.getOne)
        .delete(postHandler.remove);

    return postRouter;
};

module.exports = function(app) {

    var express = require('express');
    var postRouter = express.Router();

    var PostHandler = require('../handlers/post');
    var postHandler = new PostHandler(app);

    postRouter.get('/', postHandler.getAll);

    postRouter.post('/', postHandler.create);
    postRouter.get('/:id', postHandler.getOne);
    postRouter.delete('/:id', postHandler.remove);


    return postRouter;
};
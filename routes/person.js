// Created by andrey on 19.01.16.

module.exports = function(app) {

    var express = require('express');
    var personRouter = express.Router();

    var PersonHandler = require('../handlers/person');
    var personHandler = new PersonHandler(app);

    personRouter.get('/', personHandler.getAll);
    personRouter.post('/', personHandler.createPerson);
    personRouter.post('/test', personHandler.forTest);

    //personRouter.get('/:id', personHandler.getOne);
    //personRouter.delete('/:id', personHandler.remove);
    //personRouter.get('/find/:name', personHandler.findByName);

    return personRouter;
};
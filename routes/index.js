/**
 * Created by Roman on 20.08.2015.
 */
module.exports = function(app) {

    var bodyParser = require('body-parser');

    var userRouter = require('./user')(app);
    var postRouter = require('./post')(app);

    app.use(bodyParser.json());

    app.get('/', function (req, res, next) {
        res.sendfile('index.html');
        //res.status(200).send(req.ip);
    });

    app.use('/user', userRouter); //http://user/pupkin/90
    app.use('/post', postRouter);

    app.use(function (err, req, res, next) {
        var status = err.status || 500;

        res.status(status).send(err);
    });

};
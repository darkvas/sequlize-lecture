module.exports = function(app) {

    var bodyParser = require('body-parser');

    var userRouter = require('./user')(app);
    var postRouter = require('./post')(app);
    var personRouter = require('./person')(app);

    app.use(bodyParser.json());

    app.get('/', function (req, res, next) {
        //res.sendfile('index.html');
        res.status(200).send(req.ip);
    });

    app.use('/user', userRouter);
    app.use('/post', postRouter);
    app.use('/person', personRouter);

    app.use(function (err, req, res, next) {
        var status = err.status || 500;

        res.status(status).send(err);
    });
};
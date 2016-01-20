
var UserHandler = function (app) {

    var pgSequelize = app.get('seq');
    var User = pgSequelize.Models.User;
    var Post = pgSequelize.Models.Post;

    this.create = function (req, res, next) {

        var body = req.body;

        User
            .create(body)
            .then(function(user){
                res.status(200).send(user);
            })
            .catch(next)
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        /*var user = User.build({id: id});

        user
            .destroy()
            .then(function(userDeleted) {
                res.status(200).send(userDeleted);
            })
            .catch(next)
        */

        User
            .destroy({
                where: {id: id}
            })
            .then(function(userDeleted) {
                res.status(200).send({deleted: userDeleted});
            })
            .catch(next)
    };

    this.getAll = function (req, res, next) {

        User
            .findAll()
            .then(function (users) {
                res.status(200).send(users);
            })
            .catch(next)
    };

    this.getOne = function (req, res, next) {
        var id = req.params.id;

        User
            .findById(id, {
                include: [
                    {
                        model: Post
                    }
                ]
            })
            .then(function (user) {
                res.status(200).send(user);
            })
            .catch(next)
    };

    this.update = function (req, res, next) {
        var id = req.params.id;
        var body = req.body;

        User
            .update({
                first: body.first,
                last: body.last
            }, {
                where: {id: id},
                returning: true
            })
            .then(function (updateResult) {
                console.log('updated count: ' + updateResult[0]);
                console.log('updated rows: ' + updateResult[1]);

                res.status(200).send(updateResult[1]);
            })
            .catch(next)
    };

    this.findByName = function(req, res, next) {

        var name = req.params.name;

        User
            .findAll({
                where: {
                    first: {
                        $like: name + '%'
                    }
                }
            })
            .then(function (users) {
                res.status(200).send(users);
            })
            .catch(next)
    };

    this.getRawUsers = function (req, res, next) {

        pgSequelize.query('SELECT * FROM "users"', {type: pgSequelize.QueryTypes.SELECT }) //model: User
            .then(function (users) {

                res.status(200).send(users);
            })
            .catch(function(err){
                next(err);
            });
    };

};

module.exports = UserHandler;

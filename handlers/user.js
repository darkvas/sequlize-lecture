
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

        var user = User.build({id: id});

        user
            .destroy()
            .then(function(user){
                res.status(200).send(user);
            })
            .catch(next)
    };

    this.getAll = function (req, res, next) {

       User
           .findAll()
           .then(function(users){
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
    }

    this.findByName = function(req, res, next) {

        var name = req.params.name;

        User
            .findOne({
                where: {
                    first: name /*{
                        $like: name + '%'
                    }*/
                }
            })
            .then(function (user) {
                res.status(200).send(user);
            })
            .catch(next)
    }
};

module.exports = UserHandler;

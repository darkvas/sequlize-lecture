
var PostHandler = function (app) {

    var sequelize = app.get('seq');
    var Post = sequelize.Models.Post;
    var User = sequelize.Models.User;

    this.create = function (req, res, next) {

        var body = req.body;

        var post = Post.build(body);

        post
            .save(body)
            .then(function (post) {
                res.status(200).send(post);
            })
            .catch(next);
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        var post = Post.build({id: id});

        post
            .destroy(function (postDeleted) {
                res.status(200).send(postDeleted);
            })
            .catch(next);
    };

    this.getAll = function (req, res, next) {

        Post
            .findAll()
            .then(function (posts) {
                res.status(200).send(posts);
            })
            .catch(next)

    };

    this.getOne = function (req, res, next) {
        var id = req.params.id;

        Post
            .findById(id, {
                include: [
                    {
                        model: User, attributes: ['first', 'last']
                    }
                ]
            })
            .then(function (post) {
                res.status(200).send(post);
            })
            .catch(function (err) {

                next(err);
            })
    };

};

module.exports = PostHandler;

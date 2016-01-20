'use strict';

var Models = function (pgSequelize) {

    this.User = require('./user')(pgSequelize);
    this.Post = require('./post')(pgSequelize);
    this.Person = require('./person')(pgSequelize);
    this.Tepluchka = require('./tepluchka')(pgSequelize);

    this.User.hasMany(this.Post, {foreignKey: 'user_id'});
    this.Post.belongsTo(this.User, {foreignKey: 'user_id'});

    this.Tepluchka.belongsTo(this.Person, {foreignKey: 'user_id'});
    this.Person.hasOne(this.Tepluchka, {foreignKey: 'user_id'});

    pgSequelize
        .sync()
        //.sync({force: true})
        .then(function () {
            console.log('Synced');
        })
        .catch(function (err) {
            console.log('Error: ' + err);
        });
};

module.exports = Models;
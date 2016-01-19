module.exports = function (pgSequelize) {
    'use strict';

    this.User = require('./user')(pgSequelize);
    this.Post = require('./post')(pgSequelize);

    this.User.hasMany(this.Post, { foreignKey: 'user_id' });
    this.Post.belongsTo(this.User, { foreignKey: 'user_id' });
};
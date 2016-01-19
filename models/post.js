var Sequelize = require('sequelize');

module.exports = function (pgSequelize) {

    var PostModel = pgSequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        user_id: Sequelize.INTEGER
    }, {
        timestamps: false
    });

    return PostModel;
};
var Sequelize = require('sequelize');

module.exports = function (pgSequelize) {

    var UserModel = pgSequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first: Sequelize.STRING,
        last: Sequelize.STRING
    }, {
        timestamps: false
    });

    //UserModel
    //    .sync()
    //    .then(function () {
    //        console.log('Synced');
    //    })
    //    .catch(function (err) {
    //        console.log('Error: ' + err);
    //    });

    return UserModel;
};
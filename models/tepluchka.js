// Created by andrey on 19.01.16.

"use strict";

var Sequelize = require('sequelize');

module.exports = function (pgSequelize) {

    var TeplucyaModel = pgSequelize.define('tepluchka', {
        id     : {
            type         : Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey   : true
        },
        address: {
            type        : Sequelize.STRING,
            defaultValue: 'Somewhere'
        },
        height : {
            type    : Sequelize.INTEGER,
            validate: {
                min: {
                    args: 5,
                    msg : "Too low tepluchka"
                }
            }
        }
    }, {
        timestamps : true,
        underscored: true

    });

    return TeplucyaModel;
};
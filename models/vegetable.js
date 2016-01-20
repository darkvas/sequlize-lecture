// Created by andrey on 19.01.16.

"use strict";

var Sequelize = require('sequelize');

module.exports = function (pgSequelize) {

    var VegetableModel = pgSequelize.define('vegetable', {
        id   : {
            type         : Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey   : true
        },
        name : {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        count: {
            type        : Sequelize.INTEGER,
            defaultValue: 5
        }
    }, {
        timestamps : true,
        underscored: true

    });

    return VegetableModel;
};